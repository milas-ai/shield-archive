import type { ABSelection, ABDay, ABPhase } from '../types';
import { characters } from '../data/characters';
import { CharacterCard } from './CharacterCard';

const RestrictionIcons = ({ restrictions }: { restrictions: any }) => {
  const keys = ['type', 'side', 'gender', 'species'];

  const Tooltip = ({ value }: { value: string }) => (
    <div className="absolute bottom-full mb-2 hidden group-hover:block z-50">
      <div className="bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-slate-600 shadow-xl whitespace-nowrap">
        {value}
      </div>
    </div>
  );

  return (
    <div className="flex gap-1">
      {(() => {
        if (!restrictions) return (
          <div key={'nores'} className="group relative flex items-center justify-center">
            <img 
              src={`assets/attributes/nores.png`}
              alt={'No Restrictions'}
              className="w-7 h-7 opacity-90 transition-all group-hover:scale-110 group-hover:opacity-100"
            />
            <Tooltip value={'No Restrictions'} />
          </div>
        );
        return keys.map(key => {
          const value = restrictions[key];
          if (!value) return null;

          return (
            <div key={value} className="group relative flex items-center justify-center">
              <img
                src={`assets/attributes/${value.toLowerCase()}.png`}
                alt={value}
                className="w-7 h-7 opacity-90 transition-all group-hover:scale-110 group-hover:opacity-100"
              />
              <Tooltip value={value} />
            </div>
          );
        });
      })()}
    </div>
  );
}

interface ABRoundRowProps {
  day: ABDay;
  selections: Record<string, (ABSelection | null)[]>; 
  onOpenSelector: (phase: ABPhase, slotIdx: number) => void;
  isCurrent?: boolean;
}

export const ABRoundRow = ({ day, selections, onOpenSelector, isCurrent }: ABRoundRowProps) => {
  return (
    <div 
      className={`transition-all duration-500 rounded-xl border-2 ${
        isCurrent 
          ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-slate-900/80 scale-[1.02]' 
          : 'border-slate-800 bg-slate-900/40 opacity-70 hover:opacity-100'
      }`}
    >
      {isCurrent && (
        <div className="absolute -left-2 -top-2 bg-cyan-500 text-black text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter z-10">
          Current Round
        </div>
      )}

      <div className={`grid gap-4 p-4 ${day.phases.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {day.phases.map((phase) => {
          const phaseSelections = selections[phase.name] || [null, null, null];

          return (
            <div key={phase.name} className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold uppercase">{phase.name}</h4>
                {RestrictionIcons({ restrictions: phase.restrictions })}
              </div>

              <div className={`flex gap-2 ${day.phases.length > 1 ? 'justify-start' : 'justify-center'}`}>
                {phaseSelections.map((selection, slotIdx) => (
                  <div 
                    key={slotIdx}
                    onClick={() => onOpenSelector(phase, slotIdx)}
                    className={`w-24 h-24 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                      selection 
                        ? 'border-0'
                        : 'border-2 border-dashed border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    {selection ? (
                      <CharacterCard 
                        character={characters.find(c => c.id === selection.charId)!} 
                        overrideSkinId={selection.skinId}
                      />
                    ) : (
                      <span className="text-slate-700 text-[10px] font-bold uppercase tracking-tighter">
                        Slot {slotIdx + 1}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};