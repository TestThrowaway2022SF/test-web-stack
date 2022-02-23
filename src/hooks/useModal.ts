import { ReactNode, useRef, useState } from "react";


export interface ModalInitialState {
  isOpen: boolean;
  content?: ReactNode;
}

export interface ModalContextConfig extends ModalInitialState {
  close: () => any,
  show: (content: ReactNode) => any;
}


const useModal = (initialState: ModalInitialState): ModalContextConfig => {
  const contentRef = useRef<ReactNode>(initialState.content);

  const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen || false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleShowModal = (content: ReactNode) => {
    contentRef.current = content;
    setIsOpen(true);
  };

  return {
    isOpen,
    content: contentRef.current,
    show: handleShowModal,
    close: handleCloseModal
  };
};

export default useModal;
