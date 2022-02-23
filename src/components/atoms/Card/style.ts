import styled, { css } from "styled-components";


export const StyledCardWrapper = styled.div<{
  allowHover?: boolean;
}>`
  background: #FFFFFF;
  border-radius: 8px;

  padding: 40px 32px;


  ${({ allowHover }) => allowHover ? css`
    transition : filter 200ms linear;
    
    &:hover {
      filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
    }
  ` : null};
`;
