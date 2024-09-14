import { create } from 'zustand';

interface SideModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSideModal = create<SideModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));



export default useSideModal;