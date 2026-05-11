import { createPortal } from 'react-dom';
import { useState } from 'react';

const ALL_TAGS = [
  "Strong", "Heightened Senses", "Mind", "Healing", "Fast Movement", "Leadership", "Agility", "Poison",
  "Flame", "Chill", "Shock", "Magic", "Machine", "Weapons Master", "Command", "Durability", "Agent",
  "Evil", "Mind Resist", "Symbiote", "Energy Projection", "Phoenix Force", "Chaos Magic",
  "Spider-Sense", "Cold-Blooded", "Time Freezing Immunity", "Fantastic Four", "Sinister Six", "Power Cosmic",
  "Warriors of the Sky", "Cosmic Cube", "Gamma Radiation", "Dark Avengers", "Eternals", "Defenders",
  "Hellfire", "Black Order", "Infinity Warps", "Guardians of the Galaxy", "Annihilators", "Zombie",
  "Thunderbolts", "Olympus", "Young Avengers"
];

export const TagSelectorModal = ({ selected, onConfirm, onClose }: { 
  selected: string[], 
  onConfirm: (list: string[]) => void, 
  onClose: () => void 
}) => {
  const [tempSelected, setTempSelected] = useState<string[]>(selected);

  const toggleTag = (tag: string) => {
    setTempSelected(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return createPortal(
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-center">
          <h2 className="text-sm font-black text-white uppercase tracking-widest">Select Tags</h2>
        </header>

        <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto max-h-[60vh] custom-scrollbar bg-black/20">
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`flex items-center gap-3 p-2 rounded transition-all border ${
                tempSelected.includes(tag) ? 'bg-cyan-500/10 border-cyan-500' : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
            >
              <img 
                src={`assets/tags/${tag.toLowerCase().replace(/\s+/g, '_')}.png`} 
                className="w-6 h-6 object-contain" 
                alt=""
              />
              <span className={`text-[10px] font-bold uppercase tracking-tight ${tempSelected.includes(tag) ? 'text-cyan-400' : 'text-slate-400'}`}>
                {tag}
              </span>
            </button>
          ))}
        </div>

        <footer className="p-4 border-t border-slate-800 flex justify-center bg-slate-900/50 gap-4">
          <button onClick={() => setTempSelected([])} className="text-[10px] font-black text-slate-500 uppercase hover:text-white transition-colors">Reset</button>
          <button 
            onClick={() => onConfirm(tempSelected)}
            className="px-12 py-2 bg-transparent border border-cyan-500 text-cyan-400 text-xs font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all"
          >
            Confirm
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
};