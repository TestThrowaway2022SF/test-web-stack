import React from "react";

import {
  ButtonProps,
  ButtonType
} from "./index.d";

import {
  StyledButton
} from "./style";

const Button = (props: ButtonProps) => {
  const {
    children, onClick,
    disabled = false,
    type = ButtonType.Primary,
  } = props;

  const handleClick = async () => {
    await onClick();
  };

  return (
    <StyledButton
      onClick={handleClick}
      buttonType={type}
      disabled={disabled}
    >
      { children }
    </StyledButton>
  )
};

Button.Type = ButtonType;

export default Button;
