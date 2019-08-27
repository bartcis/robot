import React, { useContext } from 'react';
import styled from 'styled-components';
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
    <Wrapper
      style={{
        width: `${grid.width * grid.unitSize}px`,
        height: `${grid.height * grid.unitSize}px`,
      }}
    >
      <Stage
        width={grid.width * grid.unitSize}
        height={grid.height * grid.unitSize}
        options={{ backgroundColor: 0xffffff }}
      >
        {robotState.visible === true ? robotWrapper : placeholderWrapper}
      </Stage>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.section`
  border: 1px solid ${({ theme }) => theme.styles.colors.leadColorLight};
  border-radius: 5px;
  margin: auto;
  overflow: scroll;
  transform-origin: center;
  transform: rotate(-90deg);
  @media (min-width: 600px) {
    overflow: hidden;
  }
`;
