import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ABSelection } from '../types';

interface ABStore {
  selections: Record<number, Record<string, (ABSelection | null)[]>>;
  
  setSelection: (
    dayId: number, 
    phaseName: string, 
    slotIdx: number, 
    selection: ABSelection | null
  ) => void;
}

export const useABStore = create<ABStore>()(
  persist(
    (set) => ({
      selections: {},
      
      setSelection: (dayId, phaseName, slotIdx, selection) => set((state) => {
        const dayData = state.selections[dayId] || {};
        const phaseData = dayData[phaseName] || [null, null, null];
        
        const newPhaseData = [...phaseData];
        newPhaseData[slotIdx] = selection;

        return {
          selections: {
            ...state.selections,
            [dayId]: {
              ...dayData,
              [phaseName]: newPhaseData
            }
          }
        };
      }),
    }),
    { name: 'mff-ab-selections' }
  )
);