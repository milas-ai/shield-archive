import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserSettings {
  tier: number;
  skinId: string;
  equipment: string;
}

interface UserRosterState {
  characterSettings: Record<string, UserSettings>;

  updateCharacter: (charId: string, settings: Partial<UserSettings>) => void;
}

export const useUserStore = create<UserRosterState>()(
  persist(
    (set) => ({
      characterSettings: {},

      updateCharacter: (charId, settings) => set((state) => {
        const current = state.characterSettings[charId] ?? {
          tier: 1,
          skinId: '',
          equipment: '',
        };

        return {
          characterSettings: {
            ...state.characterSettings,
            [charId]: {
              ...current,
              ...settings,
            },
          },
        };
      }),
    }),
    { name: 'mff-user-roster' }
  )
);