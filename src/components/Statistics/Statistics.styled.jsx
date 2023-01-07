import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 550px;
  height: 100px;
  margin: 0 auto;

  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;
`;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 5px;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: 500;

  background-color: ${randomColor};
`;
