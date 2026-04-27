import { create } from "zustand";

interface PageState {
  isPreloaderDone: boolean;
  isTransitioning: boolean;
  setPreloaderDone: (status: boolean) => void;
  setTransitioning: (status: boolean) => void;
}

export const usePageStore = create<PageState>((set) => ({
  isPreloaderDone: false,
  isTransitioning: false,
  setPreloaderDone: (status) => set({ isPreloaderDone: status }),
  setTransitioning: (status) => set({ isTransitioning: status }),
}));
