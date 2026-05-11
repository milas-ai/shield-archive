import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Team } from '../types';

interface TeamState {
  teams: Team[];
  selectedSlot: { teamId: number; memberIndex: number } | null;
  
  setSelectedSlot: (slot: { teamId: number; memberIndex: number } | null) => void;
  assignCharacter: (characterId: string, targetTeamId?: number, targetMemberIndex?: number) => void;
  removeCharacter: (teamId: number, memberIndex: number) => void;
}

export const useTeamStore = create<TeamState>()(
  persist(
    (set) => ({
      teams: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        members: [
          { characterId: null, skinId: '', gear: '' },
          { characterId: null, skinId: '', gear: '' },
          { characterId: null, skinId: '', gear: '' },
        ] as any,
      })),
      
      selectedSlot: null,

      setSelectedSlot: (slot) => set({ selectedSlot: slot }),

      assignCharacter: (characterId, targetTeamId?, targetMemberIndex?) => set((state) => {
        const teamId = targetTeamId ?? state.selectedSlot?.teamId;
        const memberIndex = targetMemberIndex ?? state.selectedSlot?.memberIndex;

        if (!teamId || memberIndex === undefined) return state;

        const newTeams = state.teams.map((team) => {
          if (team.id !== teamId) return team;

          const newMembers = [...team.members] as Team["members"];
          newMembers[memberIndex] = {
            ...newMembers[memberIndex],
            characterId,
          };

          return { ...team, members: newMembers };
        });

        return { teams: newTeams, selectedSlot: null };
      }),

      removeCharacter: (teamId, memberIndex) => set((state) => ({
        teams: state.teams.map((t) => 
          t.id === teamId 
            ? { ...t, members: t.members.map((m, i) => i === memberIndex ? { ...m, characterId: null } : m) as any } 
            : t
        )
      })),
    }),
    { name: 'mff-teams-storage' }
  )
);