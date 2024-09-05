import x from "../../assets/x.png";
import useModal from "../../hooks/useModal";
import { ModalOptionType } from "../../types/modal.type";

function Modal({ title, contents }: ModalOptionType) {
  const { close } = useModal();

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-[#00000080] z-[100]">
      <div className="p-9 bg-white rounded-xl mx-3 max-w-[650px]">
        <header className={`flex justify-between ${title ? "mb-3" : "-mb-3"}`}>
          {title ? (
            <h3 className="text-2xl font-extrabold text-center">{title}</h3>
          ) : (
            <span></span>
          )}
          <img className="w-6 h-6 cursor-pointer" src={x} onClick={close} />
        </header>
        <ModalContents contents={contents} />
      </div>
    </div>
  );
}

function ModalContents({ contents }: Pick<ModalOptionType, "contents">) {
  if (Array.isArray(contents))
    return (
      <div>
        {contents.map((content, idx) => (
          <div key={`modal-content-${idx}`}>{content}</div>
        ))}
      </div>
    );
  return <div>{contents}</div>;
}

export default Modal;
