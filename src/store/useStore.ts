import { create } from 'zustand';
import type { Booth } from '../types';
import { generateInitialBooths, updateBuzzScores } from '../utils/simulation';

interface UIStore {
  booths: Booth[];
  selectedBoothId: string | null;
  isRunning: boolean;
  
  // Actions
  updateBuzzScores: () => void;
  selectBooth: (id: string | null) => void;
  startSimulation: () => void;
  stopSimulation: () => void;
}

export const useStore = create<UIStore>((set) => ({
  booths: generateInitialBooths(),
  selectedBoothId: null,
  isRunning: false,

  updateBuzzScores: () => {
    set((state) => ({
      booths: updateBuzzScores(state.booths),
    }));
  },

  selectBooth: (id) => {
    set({ selectedBoothId: id });
  },

  startSimulation: () => {
    set({ isRunning: true });
  },

  stopSimulation: () => {
    set({ isRunning: false });
  },
}));
