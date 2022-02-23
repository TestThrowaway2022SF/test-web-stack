import { createGlobalStyle } from "styled-components";

import {
  headerStyle
} from "./typography";


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  ${headerStyle};
`;
