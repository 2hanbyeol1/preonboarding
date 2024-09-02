import x from "../../assets/x.png";
import useModal from "../../hooks/useModal";
import { ModalOptionType } from "../../types/modal.type";

function Modal({ title, contents }: ModalOptionType) {
  const { close } = useModal();
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-[#00000080]">
      <div className="p-3 bg-white rounded-lg">
        <header className="flex justify-between mb-3">
          {title ? (
            <h3 className="text-base font-semibold text-center">{title}</h3>
          ) : (
            <span></span>
          )}
          <img className="w-6 h-6" src={x} onClick={close} />
        </header>
        <div>
          {contents.map((content, idx) => (
            <div key={`modal-content-${idx}`}>{content}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
