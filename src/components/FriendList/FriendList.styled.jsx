import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 15px;
  padding: 10px;

  width: 350px;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;
