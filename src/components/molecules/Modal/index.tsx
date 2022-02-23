import React from 'react';

import { ModalProps } from './index.d';

import {
  StyledModalWrapper,
  StyledModalCurtain,
  StyledModalContainer,
  StyledModalInner, StyledModalCard
} from './style';


const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose, canCloseSelf = true } = props;

  const handleCurtainClick = () => {
    if (canCloseSelf) {
      onClose();
    }
  };

  return (
    <StyledModalWrapper isOpen={isOpen}>
      <StyledModalCurtain onClick={handleCurtainClick} />
      <StyledModalContainer>
        <StyledModalInner>
          <StyledModalCard>
            { children }
          </StyledModalCard>
        </StyledModalInner>
      </StyledModalContainer>
    </StyledModalWrapper>
  );
};


export default Modal;
