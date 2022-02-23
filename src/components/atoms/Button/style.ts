import styled, { css } from "styled-components";

import { defaultFontFamily } from "styles/typography";

import {
  ButtonType
} from "./index.d";


export const StyledButton = styled.button<{
  buttonType?: ButtonType;
}>`
  width: 280px;
  height: 90px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  background: #FFFFFF;
  color: #000000;

  border-width: 4px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  font-family: ${defaultFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  
  transition: border-color 300ms ease-in-out;
  
  cursor: pointer;

  ${({ buttonType = ButtonType.Primary }) => {
    switch (buttonType) {
      case ButtonType.Primary:
        return css`
          background-color: #FFFFFF;
        `;
      case ButtonType.Secondary:
        return css`
          background-color: transparent;
        `;
      default:
        return css`
          background-color: #FFFFFF;
        `;
    }
  }};
  
  &:hover {
    border-color: rgba(0, 0, 0, 0.4);
  }
  
  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
    outline: none;
  }
  
  &:disabled {
    border-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.5);
    cursor: not-allowed;
  }
`;
