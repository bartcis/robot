import React, { useContext, useState } from 'react';
import RobotContext from './context/RobotContext';
import GridContext from './context/GridContext';

interface IProps {
  parentCallback: Function;
  tests: boolean;
}

const PlacementControler = ({ parentCallback, tests }: IProps) => {
  const [robotState, setRobotState] = useContext(RobotContext);
  const [gridState] = useContext(GridContext);
  const [error, setError] = useState({
    errorX: false,
    errorY: false,
    errorDir: false,
  });
  const [position, setPosition] = useState({
    setX: '',
    setY: '',
    setDirection: '',
  });

  const convertDirection = (latinValue: string) => {
    switch (latinValue) {
      case 'N':
        return 1.569;
      case 'E':
        return 3.18;
      case 'S':
        return 4.77;
      case 'W':
        return 0;
      default:
        throw new Error();
    }
  };

  const placeRobot = () => {
    if (
      !error.errorX &&
      !error.errorY &&
      !error.errorDir &&
      position.setX &&
      position.setY &&
      position.setDirection
    ) {
      parentCallback(true);
      setRobotState({
        visible: true,
        direction: position.setDirection,
        rotation: convertDirection(position.setDirection),
        xPosition: Number(position.setX),
        yPosition: Number(position.setY),
      });
    }
  };

  const validateInputs = (field: any) => {
    const value = Number(field.value);
    const xReg = RegExp(`[0-${gridState.width - 1}]`);
    const yReg = RegExp(`[0-${gridState.height - 1}]`);
    const dirReg = RegExp('^[NEWS]{1}$');
    switch (field.name) {
      case 'x_value':
        setPosition({ ...position, setX: field.value });
        if (
          xReg.test(field.value) &&
          value < gridState.width &&
          Number.isInteger(value)
        ) {
          setError({ ...error, errorX: false });
          return true;
        }
        setError({ ...error, errorX: true });
        return false;
      case 'y_value':
        setPosition({ ...position, setY: field.value });
        if (
          yReg.test(field.value) &&
          value < gridState.height &&
          Number.isInteger(value)
        ) {
          setError({ ...error, errorY: false });
          return true;
        }
        setError({ ...error, errorY: true });
        return false;
      case 'direction':
        setPosition({ ...position, setDirection: field.value });
        if (dirReg.test(field.value)) {
          setError({ ...error, errorDir: false });
          return true;
        }
        setError({ ...error, errorDir: true });
        return false;
      default:
        throw new Error();
    }
  };

  const testRender = (
    <>
      <div data-testid="errorHookTest">
        {`x: ${String(error.errorX)}, y: ${String(error.errorY)}, d:${String(
          error.errorDir
        )}`}
      </div>
      <div data-testid="positionHookTest">
        {`x: ${String(position.setX)}, y: ${String(position.setY)}, d:${String(
          position.setDirection
        )}`}
      </div>
    </>
  );

  return (
    <>
      <label>
        Provide X coordinate
        <input
          data-testid="xDataInput"
          className="input"
          value={position.setX}
          name="x_value"
          type="number"
          placeholder={`Integer from 0 to ${gridState.width - 1}`}
          onChange={e => validateInputs(e.currentTarget)}
        />
      </label>
      <label>
        Provide Y coordinate
        <input
          data-testid="yDataInput"
          className="input"
          value={position.setY}
          name="y_value"
          type="number"
          placeholder={`Integer from 0 to ${gridState.height - 1}`}
          onChange={e => validateInputs(e.currentTarget)}
        />
      </label>
      <label>
        Provide Direction
        <input
          data-testid="dirDataInput"
          className="input"
          value={position.setDirection}
          name="direction"
          type="text"
          placeholder="N, E, W or S"
          onChange={e => validateInputs(e.currentTarget)}
        />
      </label>
      {error.errorDir === true ||
      error.errorY === true ||
      error.errorX === true ? (
        <p className="error" data-testid="placementError">
          Value/s you provided are not correct
        </p>
      ) : (
        ''
      )}
      <button
        data-testid="placementButton"
        className="button"
        onClick={placeRobot}
      >
        Place
      </button>
      {tests === true ? testRender : ''}
    </>
  );
};

export default PlacementControler;
