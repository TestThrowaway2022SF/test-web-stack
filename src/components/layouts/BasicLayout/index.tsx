import React from "react";

import BasicLayoutProps from "./index.d";

import Header from "components/organisms/Header/index";

import {
  StyledBasicLayoutOuter,
  StyledBasicLayoutInner,
  StyledBasicLayoutUpper,
  StyledBasicLayoutLower
} from "./style";


const BasicLayout = (props: BasicLayoutProps) => {
  const { header, children } = props;

  return (
    <StyledBasicLayoutOuter>
      <StyledBasicLayoutInner>
        <StyledBasicLayoutUpper>
          <Header {...header} />
        </StyledBasicLayoutUpper>
        <StyledBasicLayoutLower>
          { children }
        </StyledBasicLayoutLower>
      </StyledBasicLayoutInner>
    </StyledBasicLayoutOuter>
  );
};


export default BasicLayout;
