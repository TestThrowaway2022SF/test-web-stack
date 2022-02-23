import { css } from "styled-components";

import Color from "./color";

export const defaultFontFamily = 'Source Sans Pro, "Helvetica Neue", sans-serif';

export const baseTypographyStyle = css`
  font-family: ${defaultFontFamily};
  font-style: normal;

  color: ${Color.Typography.Header};

  margin: 0;
  padding: 0;
`;

export const headerStyle = css`

  h1 {
    ${baseTypographyStyle};

    font-weight: 300;
    font-size: 48px;
    line-height: 60px;
  }

  h2 {
    ${baseTypographyStyle};

    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
  }

  p {
    ${baseTypographyStyle};

    font-weight: 300;
    font-size: 16px;
    line-height: 20px;

    margin: 0;
    padding: 0;
  }

`;
