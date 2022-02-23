import styled from "styled-components";


export const StyledAddressMapWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  
  height: 336px;
`;

export const StyledAddressMapPending = styled.div`
  flex-grow: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-color: #fff;
  color: rgba(0, 0, 0, 0.3);
  
  text-transform: uppercase;
`;
