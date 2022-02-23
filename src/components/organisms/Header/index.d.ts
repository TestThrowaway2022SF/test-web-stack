import { ReactNode } from 'react';


export type SearchCallback = (searchTerm?: string) => any;

interface HeaderProps {
  title: string;
  right?: ReactNode;
}

export default HeaderProps;
