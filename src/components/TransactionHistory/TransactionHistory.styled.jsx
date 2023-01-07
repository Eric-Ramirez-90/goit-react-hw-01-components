import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;

  table-layout: fixed;
  width: 720px;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const TableHead = styled.thead`
  height: 50px;

  background-color: #5bc0f8;
  color: #ffffff;
  font-size: 22px;
`;

export const TableTitle = styled.th`
  padding: 10px;
  border: 1px solid #d1d1d1;
`;
