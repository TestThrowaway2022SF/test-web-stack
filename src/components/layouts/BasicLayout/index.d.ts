import { ReactNode } from 'react';

import HeaderProps, { SearchCallback } from 'components/organisms/Header';

interface BasicLayoutProps {
  children?: ReactNode;
  header: HeaderProps;
  onSearch?: SearchCallback;
}

export default BasicLayoutProps;
