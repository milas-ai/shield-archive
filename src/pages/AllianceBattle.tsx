import { useState, useEffect, useRef } from 'react';
import { abSchedule } from '../data/abRounds';
import { ABRoundRow } from '../components/ABRoundRow';
import { CharacterSelectorModal } from '../components/CharacterSelectorModal';
import { useABStore } from '../store/useABStore';
import type { ABPhase } from '../types';
import { getCurrentABDayId } from '../utils/timeCycle';

export const AllianceBattlePage = () => {
  const { selections, setSelection } = useABStore();
  const currentDayId = getCurrentABDayId();
  const activeRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeRowRef.current) {
      activeRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);
  
  const [activeModal, setActiveModal] = useState<{
    dayId: number;
    phase: ABPhase;
    slotIdx: number;
  } | null>(null);

  return (
    <main className="h-full overflow-y-auto p-6 custom-scrollbar bg-slate-950">

      <header className="max-w-5xl mx-auto mb-10 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-cyan-500 tracking-tighter uppercase italic">
          Alliance Battle Guide
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-slate-400 text-sm">
            Organize your teams for each ABX/ABL round.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto flex flex-col gap-4 pb-24">
        {abSchedule.map((round, index) => {
          const isCurrent = round.id === currentDayId;
          return (
          <div 
            key={round.id} 
            ref={isCurrent ? activeRowRef : null}
            style={{ zIndex: 30 - index }} 
            className="relative"
          >
            <ABRoundRow 
              day={round} 
              isCurrent={isCurrent}
              selections={selections[round.id] || {}} 
              onOpenSelector={(phase, slotIdx) => setActiveModal({
                dayId: round.id,
                phase,
                slotIdx
              })}
            />
          </div>
        )})}
      </div>

      {activeModal && (
        <CharacterSelectorModal 
          dayId={activeModal.dayId}
          phase={activeModal.phase}
          onClose={() => setActiveModal(null)}
          onSelect={(charId, skinId) => {
            setSelection(
              activeModal.dayId, 
              activeModal.phase.name, 
              activeModal.slotIdx, 
              { charId, skinId }
            );
            setActiveModal(null);
          }}
        />
      )}
    </main>
  );
};