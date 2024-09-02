import useModalStore from "../store/modal.store";
import { ModalOptionType } from "../types/modal.type";

function useModal() {
  const open = useModalStore((state) => state.open);
  const close = useModalStore((state) => state.close);

  const handleModalOpen = (modalOptions: ModalOptionType) => {
    open(modalOptions);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    close();
    document.body.style.overflow = "unset";
  };

  return { open: handleModalOpen, close: handleModalClose };
}

export default useModal;
