import styled, {css} from 'styled-components';


import { defaultFontFamily } from 'styles/typography';

export const StyledTextInput = styled.input.attrs({
  type: 'text'
})<{
  hasError?: boolean;
}>`
  height: 64px;
  
  background: #FFFFFF;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  font-family: ${defaultFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  
  padding: 16px;

  color: #000000;
  
  transition: border-color 300ms ease-in-out;
  
  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
    outline: none;
  }

  &:not(:valid) {
    border-color: #ff0000;
  }

  &::placeholder {
    font-family: ${defaultFontFamily};
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: rgba(0, 0, 0, 0.4);
  }
  
  ${({ hasError }) => {
    return hasError ? css`border-color: #ff0000` : '';
  }};
`;
