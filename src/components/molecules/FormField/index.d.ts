import { ReactNode } from 'react';

export interface FormFieldProps {
  name: string;
  label: string;
  error?: string;
  children?: ReactNode;
}
