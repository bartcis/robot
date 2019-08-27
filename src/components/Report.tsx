import React, { useContext } from 'react';
import styled from 'styled-components';
import RobotContext from './context/RobotContext';

const Report = () => {
  const [robotState] = useContext(RobotContext);

  return (
    <Container>
      <ReportElement>
        <p>X position:</p>
        <p>
          <b>{robotState.xPosition}</b>
        </p>
      </ReportElement>
      <ReportElement>
        <p>Y position:</p>
        <p>
          <b>{robotState.yPosition}</b>
        </p>
      </ReportElement>
      <ReportElement>
        <p>Direction:</p>
        <p>
          <b>{robotState.direction}</b>
        </p>
      </ReportElement>
    </Container>
  );
};

export default Report;

const Container = styled.div`
  width: 200px;
  margin: ${({ theme }) => theme.styles.boxModel.full};
`;

const ReportElement = styled.div`
  display: flex;
  justify-content: space-between;
`;
