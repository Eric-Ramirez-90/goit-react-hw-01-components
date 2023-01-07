import styled from '@emotion/styled';

export const TableRow = styled.tr`
  :nth-of-type(2n) {
    background-color: #c8c6c6;
  }
`;

export const TableCell = styled.td`
  height: 50px;
  padding: 10px;
  font-size: 24px;
  text-transform: capitalize;
  color: #73777b;

  border: 1px solid #d1d1d1;
  text-align: center;
`;
