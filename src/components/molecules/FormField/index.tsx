import React from "react";

import { FormFieldProps } from "./index.d";

import {
  StyledFormFieldWrapper,
  StyledFormFieldLabel,
  StyledFormFieldInput,
  StyledFormFieldError
} from './style';


const FormField = (props: FormFieldProps) => {
  const { name, label, children, error } = props;
  return (
    <StyledFormFieldWrapper>
      <StyledFormFieldLabel htmlFor={name}>
        { label }
      </StyledFormFieldLabel>
      <StyledFormFieldInput>
        { children }
      </StyledFormFieldInput>
      <StyledFormFieldError data-testid={`form-field-error-${name}`}>
        { error }
      </StyledFormFieldError>
    </StyledFormFieldWrapper>
  );
};

export default FormField;
