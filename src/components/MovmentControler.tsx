import React, { useContext, useEffect } from 'react';
import RobotContext from './context/RobotContext';
import GridContext from './context/GridContext';
import KeyContext from './context/KeyContext';

const MovementControler = () => {
  const [robotState, setRobotState] = useContext(RobotContext);
  const [currentKey] = useContext(KeyContext);
  const [gridState] = useContext(GridContext);

  console.log(currentKey);

  const move = () => {
    switch (robotState.direction) {
      case 'N':
        if (robotState.yPosition < gridState.height - 1) {
          setRobotState({
            ...robotState,
            yPosition: robotState.yPosition + 1,
          });
        }
        break;
      case 'E':
        if (robotState.xPosition < gridState.width - 1) {
          setRobotState({
            ...robotState,
            xPosition: robotState.xPosition + 1,
          });
        }
        break;
      case 'S':
        if (robotState.yPosition > 0) {
          setRobotState({
            ...robotState,
            yPosition: robotState.yPosition - 1,
          });
        }
        break;
      case 'W':
        if (robotState.xPosition > 0) {
          setRobotState({
            ...robotState,
            xPosition: robotState.xPosition - 1,
          });
        }
        break;
      default:
        throw new Error();
    }
  };

  const rotate = (direction: string) => {
    const currentDirection: any = {
      N: {
        left: 'W',
        right: 'E',
      },
      E: {
        left: 'N',
        right: 'S',
      },
      S: {
        left: 'E',
        right: 'W',
      },
      W: {
        left: 'S',
        right: 'N',
      },
    };
    if (direction === 'left') {
      setRobotState({
        ...robotState,
        rotation: Number((robotState.rotation - 1.569).toFixed(3)),
        direction: currentDirection[`${robotState.direction}`].left,
      });
    } else {
      setRobotState({
        ...robotState,
        rotation: Number((robotState.rotation + 1.569).toFixed(3)),
        direction: currentDirection[`${robotState.direction}`].right,
      });
    }
  };

  useEffect(() => {
    switch (currentKey.key) {
      case 'w':
        move();
        break;
      case 'a':
        rotate('left');
        break;
      case 'd':
        rotate('right');
        break;
      default:
        break;
    }
  }, [currentKey.count]);

  return (
    <div className="wrapper--buttons">
      <button className="button" onClick={() => rotate('left')}>
        Left (A)
      </button>
      <button className="button" onClick={move}>
        Move (W)
      </button>
      <button className="button" onClick={() => rotate('right')}>
        Right (D)
      </button>
    </div>
  );
};

export default MovementControler;
