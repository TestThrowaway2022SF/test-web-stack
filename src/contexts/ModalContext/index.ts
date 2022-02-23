import { createContext } from "react";
import { ModalContextConfig } from "hooks/useModal";



const ModalContext = createContext<ModalContextConfig | null>(null);


export default ModalContext;
