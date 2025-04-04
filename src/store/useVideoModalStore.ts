// src/store/useVideoModalStore.ts
import { create } from "zustand";

type VideoModalState = {
  isOpen: boolean;
  videoId: string | null;
  openVideo: (id: string) => void;
  closeVideo: () => void;
};

export const useVideoModalStore = create<VideoModalState>((set) => ({
  isOpen: false,
  videoId: null,
  openVideo: (id) => set({ isOpen: true, videoId: id }),
  closeVideo: () => set({ isOpen: false, videoId: null }),
}));
