import { useState, useMemo, useEffect } from 'react';
import { useTeamStore } from '../store/useTeamStore';
import { characters } from '../data/characters';
import { CharacterCard } from '../components/CharacterCard';
import { TeamRow } from '../components/TeamRow';
import { getEffectiveStats } from '../utils/mff';
import { useUserStore } from '../store/useUserStore';
import { TagSelectorModal } from '../components/TagSelectorModal';
import { DndContext, DragOverlay, useDraggable, defaultDropAnimationSideEffects, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { EditCharacterModal } from '../components/EditCharacterModal';
import type { MFFCharacter } from '../types';
import { Funnel, ChevronUp } from 'lucide-react';

const FILTER_CONFIG = {
  type: ['Combat', 'Blast', 'Speed', 'Universal'],
  side: ['Hero', 'Villain', 'Neutral'],
  gender: ['Male', 'Female', 'None'],
  species: ['Human', 'Mutant', 'Inhuman', 'Alien', 'Creature', 'Other']
};

const DraggableCharacter = ({ item, onClick, onEdit }: { item: any; onClick: () => void; onEdit: () => void }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `roster-${item.char.id}-${item.skinId}`,
    data: { charId: item.char.id, skinId: item.skinId, item }
  });

  return (
    <div 
      ref={setNodeRef} 
      {...listeners} 
      {...attributes}
      className={`w-24 h-24 mx-auto ${isDragging ? 'opacity-50' : 'cursor-pointer'}`}
    >
      <CharacterCard character={item.char} overrideSkinId={item.skinId} onClick={onClick} onEdit={onEdit} />
    </div>
  );
};

export const RosterPage = () => {
  const { assignCharacter, selectedSlot } = useTeamStore();
  const characterSettings = useUserStore((state) => state.characterSettings);
  
  const [search, setSearch] = useState('');
  const [includeUniforms, setIncludeUniforms] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState<MFFCharacter | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: string | null }>({
    type: null, side: null, gender: null, species: null
  });
  const [activeItem, setActiveItem] = useState<any>(null);
  const [isOverSlot, setIsOverSlot] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const isModalOpen = isTagModalOpen || Boolean(editingCharacter);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  const filteredRoster = useMemo(() => {
    const results: { char: any; skinId: string }[] = [];

    characters.forEach(char => {
      const variants = includeUniforms 
        ? [...char.uniforms] 
        : [{ id: characterSettings[char.id]?.skinId || '', name: '', changedTags: [] }];

      variants.forEach(variant => {
        const skinId = variant.id;
        const stats = getEffectiveStats(char, skinId);

        const matchesText = char.displayName.toLowerCase().includes(search.toLowerCase());
        const matchesAttrs = Object.entries(activeFilters).every(([key, value]) => !value || stats[key as keyof typeof stats] === value);
        const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => stats.tags.includes(tag));

        if (matchesText && matchesAttrs && matchesTags) {
          results.push({ char, skinId });
        }
      });
    });

    return results;
  }, [search, activeFilters, includeUniforms, characterSettings, selectedTags]);

  const handleDragStart = (event: any) => {
    if (isModalOpen) return;

    const { active } = event;
    setActiveItem(active.data.current.item);
    setIsOverSlot(false);
  };

  const handleDragOver = (event: any) => {
    const { over } = event;
    setIsOverSlot(Boolean(over && String(over.id).startsWith('slot-')));
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    const isValidDrop = Boolean(over && String(over.id).startsWith('slot-'));

    if (isValidDrop) {
      const [_, teamId, memberIndex] = String(over.id).split('-');
      const { charId } = active.data.current;
      assignCharacter(charId, Number(teamId), Number(memberIndex));
    } else {
      setIsOverSlot(false); 
    }

    setActiveItem(null);
  };

  const handleDragCancel = () => {
    setActiveItem(null);
    setIsOverSlot(false);
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollTop(scrollTop > 600 && (window.innerHeight + scrollTop) < (document.documentElement.scrollHeight - 200));
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <DndContext sensors={isModalOpen ? [] : sensors} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel}>
      <div className="flex flex-col lg:flex-row lg:h-full bg-slate-950 text-slate-100 overflow-x-hidden">
        <aside className="w-full lg:w-124 bg-slate-900/50 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col h-100 md:h-65 lg:h-full">
          <header className="p-6">
            <h1 className="text-xl md:text-2xl font-black text-yellow-500 tracking-tighter uppercase italic">
              Team Assignments
            </h1>
          </header>

          <div className="space-y-4 flex flex-col items-center lg:items-start p-6 pt-0 overflow-y-auto no-scrollbar">
            {[1, 2, 3, 4, 5].map(id => (
              <TeamRow key={id} teamId={id} />
            ))}
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 md:p-8 md:pb-4 border-b border-slate-800 bg-slate-900/20 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg md:text-xl font-black uppercase tracking-tighter italic border-l-4 border-cyan-500 pl-3">
                  Characters <span className="text-slate-500 text-sm ml-2">({filteredRoster.length})</span>
                </h2>
                <label className="flex md:hidden items-center gap-3 cursor-pointer select-none shrink-0">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={includeUniforms}
                      onChange={() => setIncludeUniforms(!includeUniforms)}
                    />
                    <div className="w-10 h-5 bg-slate-800 rounded-full peer peer-checked:bg-cyan-600 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5"></div>
                  </div>
                </label>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setIsTagModalOpen(true)}
                  className="hidden md:block bg-slate-800 hover:bg-slate-700 border border-slate-600 px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all shrink-0"
                >
                  Select Tags
                </button>

                <div className="flex gap-2 w-full md:w-auto">
                  <input 
                    type="text"
                    placeholder="Search agent name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-black/40 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-cyan-500 outline-none w-full md:w-64 lg:w-80 transition-all min-w-0"
                  />
                  <button
                    onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                    className={`md:hidden shrink-0 bg-slate-800 hover:bg-slate-700 border transition-all px-3 py-2 rounded-lg flex items-center justify-center ${
                      isMobileFiltersOpen ? 'border-cyan-500 text-cyan-400' : 'border-slate-600 text-slate-400'
                    }`}
                  >
                    <Funnel size={16} />
                  </button>
                </div>

                <label className="hidden md:flex items-center gap-3 cursor-pointer select-none shrink-0">
                  <span className="text-[9px] lg:text-[10px] font-black text-slate-500 uppercase tracking-widest">All Uniforms</span>
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={includeUniforms}
                      onChange={() => setIncludeUniforms(!includeUniforms)}
                    />
                    <div className="w-10 h-5 bg-slate-800 rounded-full peer peer-checked:bg-cyan-600 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5"></div>
                  </div>
                </label>
              </div>
            </div>

            <div className={`${isMobileFiltersOpen ? 'flex' : 'hidden'} md:flex flex-col gap-4`}>
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${selectedTags.length === 0 ? 'md:hidden' : ''}`}>
                <div className="flex gap-2 max-w-full sm:max-w-[70%] overflow-x-auto no-scrollbar py-1">
                  {selectedTags.map(tag => (
                    <div key={tag} className="flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/50 px-2 py-1 rounded shrink-0">
                      <img src={`assets/tags/${tag.toLowerCase().replace(/\s+/g, '_')}.png`} className="w-3.5 h-3.5 object-contain" alt="" />
                      <span className="text-[9px] font-black text-cyan-400 uppercase whitespace-nowrap">{tag}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setIsTagModalOpen(true)}
                  className="md:hidden bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all shrink-0 w-full sm:w-auto"
                >
                  Select Tags
                </button>
              </div>

              <div className="flex flex-wrap gap-8 items-center bg-black/20 p-4 rounded-xl border border-slate-800/50 mt-2">
                {Object.entries(FILTER_CONFIG).map(([category, options]) => (
                  <div key={category} className="flex flex-col gap-2">
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">{category}</span>
                    <div className="flex gap-2">
                      {options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => toggleFilter(category, opt)}
                          className={`group relative p-1 rounded-md border transition-all ${
                            activeFilters[category] === opt 
                              ? 'bg-cyan-500/20 border-cyan-500 scale-110 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                              : 'bg-slate-900 border-slate-800 hover:border-slate-600'
                          }`}
                        >
                          <img 
                            src={`assets/attributes/${opt.toLowerCase()}.png`} 
                            alt={opt}
                            className={`w-6 h-6 object-contain ${activeFilters[category] === opt ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => {
                    setActiveFilters({ type: null, side: null, gender: null, species: null });
                    setSelectedTags([]);
                  }}
                  className="text-[10px] font-black text-red-500 uppercase hover:text-red-400 transition-colors ml-auto mt-2 sm:mt-0"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
            
          <div className="flex-1 p-8 lg:overflow-y-auto no-scrollbar">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 min-[125rem]:grid-cols-12 min-[170rem]:grid-cols-20 gap-4">
              {filteredRoster.map((item, idx) => (
                <DraggableCharacter
                  key={`${item.char.id}-${item.skinId}-${idx}`}
                  item={item}
                  onClick={() => {
                    if (selectedSlot) assignCharacter(item.char.id);
                  }}
                  onEdit={() => setEditingCharacter(item.char)}
                />
              ))}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); 
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`lg:hidden fixed bottom-8 right-8 w-12 h-12 z-100 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 flex items-center justify-center hover:bg-slate-800 hover:text-white shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out ${
              showScrollTop 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            style={{ WebkitBackfaceVisibility: 'hidden' }}
          >
            <ChevronUp size={24} />
          </button>
        </main>

        <DragOverlay zIndex={1000} dropAnimation={
          isOverSlot 
            ? null
            : { 
              sideEffects: defaultDropAnimationSideEffects({
                styles: { active: { opacity: '0.5' } },
            })}
        }>
          {activeItem ? (
            <div className="w-24 h-24 opacity-90 cursor-grabbing">
              <CharacterCard character={activeItem.char} overrideSkinId={activeItem.skinId} />
            </div>
          ) : null}
        </DragOverlay>

        {isTagModalOpen && (
          <TagSelectorModal 
            selected={selectedTags}
            onConfirm={(list) => {
              setSelectedTags(list);
              setIsTagModalOpen(false);
            }}
            onClose={() => setIsTagModalOpen(false)}
          />
        )}

        {editingCharacter && (
          <EditCharacterModal 
            character={editingCharacter} 
            onClose={() => setEditingCharacter(null)} 
          />
        )}
      </div>
    </DndContext>
  );
};