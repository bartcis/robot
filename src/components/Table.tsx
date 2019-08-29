import React, { useContext } from 'react';
import { Stage, Sprite } from 'react-pixi-fiber';

import Robot from './Robot';
import RobotContext from './context/RobotContext';
import GridContext from './context/GridContext';

const Table = () => {
  const [robotState] = useContext(RobotContext);
  const [gridState] = useContext(GridContext);

  const robotWrapper = (
    <Robot
      y={robotState.xPosition * gridState.unitSize + gridState.unitSize / 2}
      x={robotState.yPosition * gridState.unitSize + gridState.unitSize / 2}
      rotation={robotState.rotation}
    />
  );

  const placeholderWrapper = <Sprite />;

  return (
    <section className="stage-wrapper">
      <Stage
        width={gridState.height * gridState.unitSize}
        height={gridState.width * gridState.unitSize}
        options={{ backgroundColor: 0xffffff }}
      >
        {robotState.visible === true ? robotWrapper : placeholderWrapper}
      </Stage>
    </section>
  );
};

export default Table;
