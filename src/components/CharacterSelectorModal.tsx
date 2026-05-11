import type { ABPhase } from '../types';
import { createPortal } from 'react-dom';
import { useState, useMemo } from 'react';
import { characters } from '../data/characters';
import { CharacterCard } from './CharacterCard';
import { getEffectiveStats } from '../utils/mff';
import { useUserStore } from '../store/useUserStore';
import { useABStore } from '../store/useABStore';

interface CharacterSelectorModalProps {
  dayId: number;
  phase: ABPhase;
  onSelect: (charId: string, skinId: string) => void;
  onClose: () => void;
}

export const CharacterSelectorModal = ({ dayId, phase, onSelect, onClose }: CharacterSelectorModalProps) => {
  const [includeUniforms, setIncludeUniforms] = useState(false);
  const [search, setSearch] = useState('');

  const characterSettings = useUserStore((state) => state.characterSettings);
  const selections = useABStore((state) => state.selections);

  const usedCharIds = useMemo(() => {
    const ids = new Set<string>();
    const daySelections = selections[dayId] || {};
    
    Object.values(daySelections).forEach(phaseSlots => {
      phaseSlots.forEach(slot => {
        if (slot) ids.add(slot.charId);
      });
    });
    return ids;
  }, [selections, dayId]);

  const displayList = useMemo(() => {
    const results: { char: any; skinId: string; isUsed: boolean }[] = [];
    const { restrictions = {} } = phase;

    const checkValidity = (char: any, sId: string) => {
      const stats = getEffectiveStats(char, sId);
      if (restrictions.type && stats.type !== restrictions.type) return false;
      if (restrictions.side && stats.side !== restrictions.side) return false;
      if (restrictions.species && stats.species !== restrictions.species) return false;
      if (restrictions.gender && stats.gender !== restrictions.gender) return false;
      return true;
    };

    characters.forEach((char) => {
      if (!char.displayName.toLowerCase().includes(search.toLowerCase())) return;

      const equippedSkinId = characterSettings[char.id]?.skinId || '';
      const isUsed = usedCharIds.has(char.id);

      if (!includeUniforms) {
        if (checkValidity(char, equippedSkinId)) {
          results.push({ char, skinId: equippedSkinId, isUsed });
        } 
        else if (equippedSkinId !== '' && checkValidity(char, '')) {
          results.push({ char, skinId: '', isUsed });
        }
      } else {
        char.uniforms.forEach((uni: any) => {
          if (checkValidity(char, uni.id)) {
            results.push({ char, skinId: uni.id, isUsed });
          }
        });
      }
    });

    return results;
  }, [phase, includeUniforms, search, characterSettings, usedCharIds]);

  return createPortal(
    <div 
      className="fixed inset-0 z-999 flex items-center justify-center p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md" 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }} 
      />
      
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl flex flex-col max-h-[90vh] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Select for <span className="text-cyan-400">{phase.name}</span>
            </h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">
              {displayList.length} Options Available
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input 
              type="text"
              placeholder="Search Character..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black/40 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-cyan-500 outline-none w-48 transition-all"
            />

            <label className="flex items-center gap-3 cursor-pointer select-none">
              <span className="text-xs font-bold text-slate-400 uppercase">All Uniforms</span>
              <div className="relative">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={includeUniforms}
                  onChange={() => setIncludeUniforms(!includeUniforms)}
                />
                <div className="w-10 h-5 bg-slate-700 rounded-full peer peer-checked:bg-cyan-600 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5"></div>
              </div>
            </label>
            
            <button 
              className="ml-4 text-slate-400 hover:text-white transition-colors max-md:top-6 max-md:right-7 max-md:absolute"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }} 
            >
              ✕
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 custom-scrollbar bg-black/20">
          {displayList.map((item, idx) => (
            <div key={`${item.char.id}-${item.skinId}-${idx}`} className="w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center">
              <CharacterCard 
                character={item.char} 
                overrideSkinId={item.skinId}
                isUsed={item.isUsed}
                onClick={() => !item.isUsed && onSelect(item.char.id, item.skinId)} 
              />
            </div>
          ))}

          {displayList.length === 0 && (
            <div className="col-span-full py-9 text-center">
              <p className="text-slate-600 italic font-medium">No characters match these restrictions.</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};