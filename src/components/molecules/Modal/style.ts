import styled, { css } from "styled-components";
import Card from "components/atoms/Card";


export const StyledModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  z-index: 200;
  
  pointer-events: none;
`;

export const StyledModalInner = styled.div`
  pointer-events: all;
  transform: scale(0);
  transition: transform 300ms cubic-bezier(.5, -0.5, 1, 1);
`;

export const StyledModalCard = styled(Card)`
  background-color: #F8F8F8;
  padding: 64px;
`;

export const StyledModalCurtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  background-color: rgba(0, 0, 0, 0.3);
  
  z-index: 100;
  
  opacity: 0;
  transition: opacity 600ms ease-in-out;
`;

export const StyledModalWrapper = styled.div<{
  isOpen: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        ${StyledModalCurtain} {
          opacity: 1;
          transition: opacity 300ms ease-in-out;
        }
        
        ${StyledModalInner} {
          transform: scale(1);
          transition: transform 600ms cubic-bezier(0, 0, 0, 1.50);
        }
      `;
    }
    
    return css`
      pointer-events: none;
      * {
        pointer-events: none;
      }
    `;
  }}
`;
