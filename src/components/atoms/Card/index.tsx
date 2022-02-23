import React from 'react';

import CardProps from './index.d';

import {
  StyledCardWrapper
} from './style';

const Card = (props: CardProps) => {
  const { children, className, allowHover = false } = props;

  return (
    <StyledCardWrapper
      className={className}
      allowHover={allowHover}
    >
      { children }
    </StyledCardWrapper>
  );
};

export default Card;
