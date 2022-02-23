import styled from "styled-components";

import Card from "components/atoms/Card";

export const StyledUserCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledUserCardAvatar = styled.div`
  align-self: center;

  border-radius: 168px;
  overflow: hidden;

  width: 168px;
  height: 168px;

  margin-bottom: 28px;

  > img {
    width: 168px;
    height: 168px;
    
    object-fit: fill;

    background-color: #000000;
  }
`;

export const StyledUserCardInfo = styled.div`
  align-self: stretch;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;

  > p {
    transition: opacity 300ms ease-in-out;
      
    > span {
      color: #BB0010;
      font-weight: 600;
    }
  }
`;

export const StyledUserCardDesc = styled.div`
  text-align: left;

  > p {
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledUserCardEdit = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  
  border: 0;
  background: none;
  
  width: 18px;
  height: 18px;
  padding: 0;

  transition: opacity 300ms ease-in-out;
  
  cursor: pointer;
  
  > svg {
    path {
      fill: rgba(0, 0, 0, 0.4);
      transition: fill 300ms ease-in-out;
    }
  }
  
  &:hover {
    > svg {
      path {
        fill: rgba(0, 0, 0, 1);
      }
    }
  }
`;

export const StyledUserCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  max-width: 400px;
  
  position: relative;

  &:not(:hover) {
    ${StyledUserCardEdit} {
      opacity: 0;
    }
    
    ${StyledUserCardInfo} {
      > p {
        opacity: 0;
      }
    }
  }
`;
