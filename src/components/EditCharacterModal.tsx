import { createPortal } from 'react-dom';
import type { MFFCharacter } from '../types';
import { useUserStore } from '../store/useUserStore';

export const EditCharacterModal = ({ character, onClose }: { character: MFFCharacter, onClose: () => void }) => {
  const { characterSettings, updateCharacter } = useUserStore();
  const settings = characterSettings[character.id] || { tier: 1, skinId: '', equipment: 'Option A' };

  return createPortal(
    <div
      className="fixed inset-0 z-999 flex items-center justify-center p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }} 
      />
      <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl">
        <header className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-yellow-500 italic uppercase tracking-tighter">
            {character.displayName}
          </h3>
          <button
            className="text-slate-400 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            ✕
          </button>
        </header>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2 font-bold uppercase tracking-wider">Rank / Tier</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((t) => (
                <button
                  key={t}
                  disabled={t > character.maxTier}
                  onClick={() => updateCharacter(character.id, { tier: t })}
                  className={`flex-1 py-2 rounded-lg border-2 transition-all ${
                    settings.tier === t ? 'border-yellow-500 bg-yellow-500/20 text-yellow-500' : 'border-slate-800 bg-slate-950 text-slate-500'
                  } disabled:opacity-20 disabled:cursor-not-allowed`}
                >
                  T{t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2 font-bold uppercase tracking-wider">Uniform</label>
            <select 
              value={settings.skinId}
              onChange={(e) => updateCharacter(character.id, { skinId: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none focus:border-blue-500"
            >
              {character.uniforms.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2 font-bold uppercase tracking-wider">Custom Gear</label>
            <select 
              value={settings.equipment ?? ''}
              onChange={(e) => updateCharacter(character.id, { equipment: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 outline-none focus:border-green-500"
            >
              <option value="">None</option>
              <option value="obelisk">Obelisk</option>
              <option value="authority">Authority</option>
              <option value="competition">Competition</option>
              <option value="conquest">Conquest</option>
              <option value="destruction">Destruction</option>
              <option value="energy">Energy</option>
              <option value="greed">Greed</option>
              <option value="insight">Insight</option>
              <option value="judgement">Judgment</option>
              <option value="liberation">Liberation</option>
              <option value="patience">Patience</option>
              <option value="rage">Rage</option>
              <option value="refinement">Refinement</option>
              <option value="regeneration">Regeneration</option>
              <option value="transcendence">Transcendence</option>
              <option value="veteran">Veteran</option>
            </select>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};