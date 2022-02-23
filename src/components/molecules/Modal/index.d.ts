import { ReactNode } from "react";


export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: (any?) => any;
  canCloseSelf?: boolean;
}
