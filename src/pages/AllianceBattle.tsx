import { useState, useEffect, useRef } from 'react';
import { abSchedule } from '../data/abRounds';
import { ABRoundRow } from '../components/ABRoundRow';
import { CharacterSelectorModal } from '../components/CharacterSelectorModal';
import { useABStore } from '../store/useABStore';
import type { ABPhase } from '../types';
import { getCurrentABDayId } from '../utils/timeCycle';
import { CharacterRanking } from '../components/CharacterRanking';
import { ChevronUp, Target, BarChart3 } from 'lucide-react';

export const AllianceBattlePage = () => {
  const { selections, setSelection } = useABStore();
  const currentDayId = getCurrentABDayId();
  const topRef = useRef<HTMLDivElement>(null);
  const activeRowRef = useRef<HTMLDivElement>(null);
  const rankingRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    if (activeRowRef.current) { scrollTo(activeRowRef); }
  }, []);
  
  const [activeModal, setActiveModal] = useState<{
    dayId: number;
    phase: ABPhase;
    slotIdx: number;
  } | null>(null);

  return (
    <main className="p-6 no-scrollbar bg-slate-950">
      <div ref={topRef} />

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

      <div ref={rankingRef}>
        <CharacterRanking />
      </div>

      <nav className="fixed bottom-8 right-8 flex flex-col gap-4 z-100">
        <button 
          onClick={() => scrollTo(topRef)}
          className="w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all shadow-xl backdrop-blur-md"
        >
          <ChevronUp size={24} />
        </button>

        <button 
          onClick={() => scrollTo(activeRowRef)}
          className="w-12 h-12 rounded-full bg-cyan-600/80 border border-cyan-400 text-white flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md"
        >
          <Target size={24} />
        </button>

        <button 
          onClick={() => scrollTo(rankingRef)}
          className="w-12 h-12 rounded-full bg-amber-600/80 border border-amber-400 text-white flex items-center justify-center hover:bg-amber-500 hover:scale-110 transition-all shadow-[0_0_15px_rgba(217,119,6,0.4)] backdrop-blur-md"
        >
          <BarChart3 size={24} />
        </button>
      </nav>

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