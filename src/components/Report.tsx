import React, { useContext } from 'react';
import RobotContext from './context/RobotContext';

const Report = () => {
  const [robotState] = useContext(RobotContext);

  return (
    <div className="wrapper--report">
      <div className="layout--main">
        <p>X position:</p>
        <p>
          <b>{robotState.xPosition}</b>
        </p>
      </div>
      <div className="layout--main">
        <p>Y position:</p>
        <p>
          <b>{robotState.yPosition}</b>
        </p>
      </div>
      <div className="layout--main">
        <p>Direction:</p>
        <p>
          <b>{robotState.direction}</b>
        </p>
      </div>
    </div>
  );
};

export default Report;
