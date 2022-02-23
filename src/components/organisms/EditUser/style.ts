import styled from "styled-components";

import {
  StyledButton
} from "components/atoms/Button/style";


export const StyledEditUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  width: 1200px;
`;

export const StyledEditUserHeader = styled.h1`
  margin-bottom: 64px;
`;

export const StyledEditUserContent = styled.div`
  display: flex;
`;

export const StyledEditUserMapContainer = styled.div`
  width: 100%;
  max-width: 518px;
  height: 336px;
  margin-right: 60px;
`;

export const StyledEditUserFormContainer = styled.div`
  flex-grow: 1;
  
  flex-direction: column;
  align-items: stretch;
`;

export const StyledEditUserFormFields = styled.div`
  margin-bottom: 46px;
`;


export const StyledEditUserFormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${StyledButton} {
    width: 280px;
  }
`;
