import styled from '@emotion/styled';

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'lightgreen' : 'red';
  }};
`;

export const Image = styled.img`
  width: 90px;

  border-radius: 10px;

  background-color: aquamarine;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const Name = styled.span`
  font-size: 28px;
  font-weight: 500;
`;
