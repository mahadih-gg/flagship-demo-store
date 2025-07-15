
import { create } from "zustand";

interface ScrollTargetState {
  targetId: string | null;
  setTargetId: (id: string) => void;
  clearTargetId: () => void;
}

export const useScrollTargetStore = create<ScrollTargetState>((set) => ({
  targetId: null,
  setTargetId: (id) => set({ targetId: id }),
  clearTargetId: () => set({ targetId: null }),
}));
