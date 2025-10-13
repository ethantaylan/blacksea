import { create } from 'zustand';

interface ContactState {
  isOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  isOpen: false,
  openContact: () => set({ isOpen: true }),
  closeContact: () => set({ isOpen: false }),
}));
