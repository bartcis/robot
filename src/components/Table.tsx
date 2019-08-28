import React, { useContext } from 'react';
import { Stage, Sprite } from 'react-pixi-fiber';

import Robot from './Robot';
import RobotContext from './context/RobotContext';

interface IProps {
  grid: {
    width: number;
    height: number;
    unitSize: number;
  };
}

const Table = ({ grid }: IProps) => {
  const [robotState] = useContext(RobotContext);
  const robotWrapper = (
    <Robot
      y={robotState.xPosition * grid.unitSize + grid.unitSize / 2}
      x={robotState.yPosition * grid.unitSize + grid.unitSize / 2}
      rotation={robotState.rotation}
    />
  );

  const placeholderWrapper = <Sprite />;

  return (
    <section className="stage-wrapper">
      <Stage
        width={grid.width * grid.unitSize}
        height={grid.height * grid.unitSize}
        options={{ backgroundColor: 0xffffff }}
      >
        {robotState.visible === true ? robotWrapper : placeholderWrapper}
      </Stage>
    </section>
  );
};

export default Table;
