
export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export interface ButtonProps {
  children: string;
  onClick: (any?) => any;
  disabled?: boolean;
  type?: ButtonType;
}
