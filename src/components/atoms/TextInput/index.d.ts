import { FunctionComponent } from 'react';

export interface TextInputProps {
  value?: string;
  default?: string;
  onChange: (any?) => any;
  placeholder?: string;
}

const TextInput: FunctionComponent<TextInputProps>;

export default TextInput;
