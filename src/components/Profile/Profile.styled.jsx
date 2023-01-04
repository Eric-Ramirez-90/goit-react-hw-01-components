import styled from '@emotion/styled';

export const Frame = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
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
  margin-bottom: 20px;
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
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background: #e5e5f5;
  text-align: center;
  padding-top: 28px;
  border: 1px #d5d5f8 solid;
  text-align: center;
`;
