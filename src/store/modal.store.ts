import { create } from "zustand";
import { ModalOptionType } from "../types/modal.type";

interface ModalStore {
  modalOptions: ModalOptionType | null;
  open: (modalOptions: ModalOptionType) => void;
  close: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  modalOptions: null,
  open: (modalOptions) => set(() => ({ modalOptions: modalOptions })),
  close: () => set(() => ({ modalOptions: null })),
}));

export default useModalStore;
