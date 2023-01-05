import styled from '@emotion/styled';

export const Frame = styled.div`
  max-width: 250px;
  margin: 150px auto 0;
  box-shadow: 0 10px 90px #00000024;
  text-align: center;
  font-size: 20px;
  border-radius: 15px;
`;

export const DescContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
`;

export const Image = styled.img`
  margin: auto;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ProfName = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProfInfo = styled.p`
  color: #808080;
  margin-bottom: 10px;
`;

export const StatsInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  padding: 5px;
  width: 100%;
  height: 100px;
  background: #e5e5f5;
  border: 1px #d5d5f8 solid;
`;
export const Label = styled.span`
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
