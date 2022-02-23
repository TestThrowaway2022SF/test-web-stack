import styled from 'styled-components';


export const StyledUserListContainer = styled.div``;

export const StyledUserList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
`;

export const StyledUserListItem = styled.li`
  flex-grow: 1;
  flex-shrink: 1;
  
  max-width: 400px;
`;

export const StyledLoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 64px;
`;
