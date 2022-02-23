import React from "react";

import HeaderProps from "./index.d";

import {
  StyledHeader,
  StyledHeaderLeft,
  StyledHeaderRight
} from "./style";


const Header = (props: HeaderProps) => {
  const { title, right } = props;

  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <h1>
          { title }
        </h1>
      </StyledHeaderLeft>
      <StyledHeaderRight>
        { right }
      </StyledHeaderRight>
    </StyledHeader>
  );
};


export default Header;
