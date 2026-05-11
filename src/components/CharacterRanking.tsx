import { useMemo } from 'react';
import { useABStore } from '../store/useABStore';
import { characters } from '../data/characters';

export const CharacterRanking = () => {
  const selections = useABStore((state) => state.selections);

  const ranking = useMemo(() => {
    const counts: Record<string, number> = {};

    Object.values(selections).forEach((dayPhases) => {
      Object.values(dayPhases).forEach((slots) => {
        slots.forEach((slot) => {
          if (slot) {
            counts[slot.charId] = (counts[slot.charId] || 0) + 1;
          }
        });
      });
    });

    return Object.entries(counts)
      .map(([charId, count]) => ({
        name: characters.find((c) => c.id === charId)?.displayName || charId,
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }, [selections]);

  if (ranking.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto mb-10 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <header className="bg-slate-900/60 p-6 border-b border-slate-800 flex justify-center">
        <h2 className="text-2xl font-black text-cyan-500 tracking-widest uppercase italic">
          Character Ranking
        </h2>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.2em] text-slate-500 border-b border-slate-800">
              <th className="px-8 py-4 font-black w-16">#</th>
              <th className="px-8 py-4 font-black">Character</th>
              <th className="px-8 py-4 font-black text-right">Days</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {ranking.map((item, index) => (
              <tr 
                key={item.name} 
                className="hover:bg-cyan-500/5 transition-colors group"
              >
                <td className="px-8 py-4 text-sm font-mono text-slate-600 group-hover:text-cyan-500">
                  {index + 1}.
                </td>
                <td className="px-8 py-4 text-sm font-bold text-slate-100 uppercase tracking-tight">
                  {item.name}
                </td>
                <td className="px-8 py-4 text-sm font-black text-right text-cyan-500">
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};