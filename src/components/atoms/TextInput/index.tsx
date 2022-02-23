import React, { SyntheticEvent } from "react";
import { StyledTextInput } from "./style";

import {
  TextInputProps
} from "./index.d";

const TextInput = (props: TextInputProps) => {
  const { onChange, placeholder, value } = props;

  const handleChange = async (event: SyntheticEvent) => {
    await onChange(event);
  };

  return (
    <StyledTextInput
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
