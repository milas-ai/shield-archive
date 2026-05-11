import { useState, useMemo } from 'react';
import { useTeamStore } from '../store/useTeamStore';
import { characters } from '../data/characters';
import { CharacterCard } from '../components/CharacterCard';
import { TeamRow } from '../components/TeamRow';
import { getEffectiveStats } from '../utils/mff';
import { useUserStore } from '../store/useUserStore';
import { TagSelectorModal } from '../components/TagSelectorModal';

const FILTER_CONFIG = {
  type: ['Combat', 'Blast', 'Speed', 'Universal'],
  side: ['Hero', 'Villain', 'Neutral'],
  gender: ['Male', 'Female', 'None'],
  species: ['Human', 'Mutant', 'Inhuman', 'Alien', 'Creature', 'Other']
};

export const RosterPage = () => {
  const { assignCharacter, selectedSlot } = useTeamStore();
  const characterSettings = useUserStore((state) => state.characterSettings);
  
  const [search, setSearch] = useState('');
  const [includeUniforms, setIncludeUniforms] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: string | null }>({
    type: null,
    side: null,
    gender: null,
    species: null
  });

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
        const matchesAttrs = Object.entries(activeFilters).every(([key, value]) => {
          if (!value) return true;
          return stats[key as keyof typeof stats] === value;
        });

        const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => stats.tags.includes(tag));

        if (matchesText && matchesAttrs && matchesTags) {
          results.push({ char, skinId });
        }
      });
    });

    return results;
  }, [search, activeFilters, includeUniforms, characterSettings, selectedTags]);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <aside className="w-full max-w-md min-w-130 border-r border-slate-800 bg-slate-900/30 p-6 overflow-y-auto flex flex-col gap-6 no-scrollbar">
        <header>
          <h1 className="text-3xl font-black text-yellow-500 tracking-tighter uppercase italic">
            Team Assignments
          </h1>
        </header>

        <section className="space-y-4">
          {[1, 2, 3, 4, 5].map(id => (
            <TeamRow key={id} teamId={id} />
          ))}
        </section>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-8 pb-4 border-b border-slate-800 bg-slate-900/20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black uppercase tracking-tighter italic border-l-4 border-cyan-500 pl-3">
                Characters <span className="text-slate-500 text-sm ml-2">({filteredRoster.length})</span>
              </h2>
              
              <div className="flex items-center gap-6">
                <div className="flex gap-2 max-w-75 overflow-x-auto no-scrollbar py-1">
                  {selectedTags.map(tag => (
                    <div key={tag} className="flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/50 px-2 py-1 rounded shrink-0">
                      <img src={`assets/tags/${tag.toLowerCase().replace(/\s+/g, '_')}.png`} className="w-3.5 h-3.5 object-contain" alt="" />
                      <span className="text-[9px] font-black text-cyan-400 uppercase whitespace-nowrap">{tag}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setIsTagModalOpen(true)}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3 py-2 rounded text-[10px] font-black uppercase tracking-widest transition-all shrink-0"
                >
                  Select Tags
                </button>

                <input 
                  type="text"
                  placeholder="Search agent name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-black/40 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-cyan-500 outline-none w-64 transition-all"
                />

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">All Uniforms</span>
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

            <div className="flex flex-wrap gap-8 items-center bg-black/20 p-4 rounded-xl border border-slate-800/50">
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
                onClick={() => setActiveFilters({ type: null, side: null, gender: null, species: null })}
                className="text-[10px] font-black text-red-500 uppercase hover:text-red-400 transition-colors ml-auto"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-4">
            {filteredRoster.map((item, idx) => (
              <div key={`${item.char.id}-${item.skinId}-${idx}`} className="w-24 h-24 mx-auto">
                <CharacterCard 
                  character={item.char}
                  overrideSkinId={item.skinId}
                  onClick={() => {
                    if (selectedSlot) assignCharacter(item.char.id);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

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
    </div>
  );
};