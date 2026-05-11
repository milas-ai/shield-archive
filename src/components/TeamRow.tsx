import { useTeamStore } from '../store/useTeamStore';
import { characters } from '../data/characters';
import { CharacterCard } from './CharacterCard';
import { useDroppable } from '@dnd-kit/core';

const DroppableSlot = ({ teamId, idx, children, isSelected }: any) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `slot-${teamId}-${idx}`,
  });

  return (
    <div 
      ref={setNodeRef}
      className={`relative p-1 rounded-lg border-2 transition-all ${
        isOver ? 'border-cyan-500 bg-cyan-500/20 scale-110' : 
        isSelected ? 'border-yellow-500 bg-yellow-500/10 scale-105' : 'border-transparent'
      }`}
    >
      {children}
    </div>
  );
};

export const TeamRow = ({ teamId }: { teamId: number }) => {
  const { teams, selectedSlot, setSelectedSlot, removeCharacter } = useTeamStore();
  const team = teams.find(t => t.id === teamId);

  return (
    <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
      <span className="text-slate-500 font-bold w-12 text-sm uppercase">Team {teamId}</span>
      
      <div className="flex gap-3">
        {team?.members.map((member, idx) => {
          const charData = characters.find(c => c.id === member.characterId);
          const isSelected = selectedSlot?.teamId === teamId && selectedSlot?.memberIndex === idx;

          return (
            <DroppableSlot teamId={teamId} idx={idx} isSelected={isSelected}>
              {charData ? (
                <div className="relative group w-20 h-20 sm:w-24 sm:h-24">
                  <CharacterCard 
                    character={charData}
                  />
                  <button 
                    onClick={() => removeCharacter(teamId, idx)}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-[12px] z-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border-2 border-slate-900 shadow-lg cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setSelectedSlot({ teamId, memberIndex: idx })}
                  className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center text-slate-600 hover:border-slate-500 hover:text-slate-400"
                >
                  {isSelected ? 'Selecting...' : '+ Add'}
                </button>
              )}
            </DroppableSlot>
          );
        })}
      </div>
    </div>
  );
};