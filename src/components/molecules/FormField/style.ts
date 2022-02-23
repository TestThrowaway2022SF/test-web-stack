import styled from "styled-components";

import {
  defaultFontFamily
} from "styles/typography";


export const StyledFormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const StyledFormFieldLabel = styled.label`
  
  font-family: ${defaultFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  
  height: 16px;

  color: #000000;
  
  margin-bottom: 8px;
`;

export const StyledFormFieldInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledFormFieldError = styled.div`
  display: flex;
  align-items: center;
  
  height: 24px;
  
  color: #ff0000;
  
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
`;
