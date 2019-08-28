import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import RobotContext from './context/RobotContext';
import Report from './Report';

interface IProps {
  grid: {
    width: number;
    height: number;
    unitSize: number;
  };
}

const Controlers = ({ grid }: IProps) => {
  const [robotState, setRobotState] = useContext(RobotContext);
  const [controlers, setControlers] = useState(false);
  const [error, setError] = useState(false);
  const [position, setPosition] = useState({
    setX: '',
    setY: '',
    setDirection: '',
  });

  const move = () => {
    switch (robotState.direction) {
      case 'N':
        if (robotState.yPosition < grid.height - 1) {
          setRobotState({
            ...robotState,
            yPosition: robotState.yPosition + 1,
          });
        }
        break;
      case 'E':
        if (robotState.xPosition < grid.width - 1) {
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
    if (position.setX && position.setY && position.setDirection) {
      setError(false);
      setControlers(true);
      setRobotState({
        visible: true,
        direction: position.setDirection,
        rotation: convertDirection(position.setDirection),
        xPosition: Number(position.setX),
        yPosition: Number(position.setY),
      });
    } else {
      setError(true);
    }
  };

  const validateInputs = (field: any) => {
    const value = Number(field.value);
    const xReg = RegExp(`[0-${grid.width - 1}]`);
    const yReg = RegExp(`[0-${grid.height - 1}]`);
    const dirReg = RegExp('^[NEWS]{1}$');
    switch (field.name) {
      case 'x_value':
        setPosition({ ...position, setX: field.value });
        if (
          xReg.test(field.value) &&
          value < grid.width &&
          Number.isInteger(value)
        ) {
          setError(false);
          return true;
        }
        setError(true);
        return false;
      case 'y_value':
        setPosition({ ...position, setY: field.value });
        if (
          yReg.test(field.value) &&
          value < grid.height &&
          Number.isInteger(value)
        ) {
          setError(false);
          return true;
        }
        setError(true);
        return false;
      case 'direction':
        setPosition({ ...position, setDirection: field.value });
        if (dirReg.test(field.value)) {
          setError(false);
          return true;
        }
        setError(true);
        return false;
      default:
        throw new Error();
    }
  };

  const keyControlers = (key: string) => {
    switch (key) {
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
  };

  const controlersWrapper = (
    <ButtonsWrapper>
      <button onClick={() => rotate('left')}>Left (A)</button>
      <button onClick={move}>Move (W)</button>
      <button onClick={() => rotate('right')}>Right (D)</button>
    </ButtonsWrapper>
  );

  return (
    <Container onKeyUp={e => keyControlers(e.key)}>
      <section>
        <InputsWrapper>
          <label>
            Provide X coordinate
            <input
              value={position.setX}
              name="x_value"
              placeholder={`Integer from 0 to ${grid.width - 1}`}
              onChange={e => validateInputs(e.currentTarget)}
            />
          </label>
          <label>
            Provide Y coordinate
            <input
              value={position.setY}
              name="y_value"
              type="number"
              placeholder={`Integer from 0 to ${grid.height - 1}`}
              onChange={e => validateInputs(e.currentTarget)}
            />
          </label>
          <label>
            Provide Direction
            <input
              value={position.setDirection}
              name="direction"
              placeholder="N, E, W or S"
              onChange={e => validateInputs(e.currentTarget)}
            />
          </label>
        </InputsWrapper>
        {error === true ? (
          <StyledError>Value/s you provided are not correct</StyledError>
        ) : (
          ''
        )}
        <button onClick={placeRobot}>Place</button>
      </section>
      {controlers === true ? controlersWrapper : ''}
      {controlers === true ? <Report /> : ''}
    </Container>
  );
};

export default Controlers;

const StyledError = styled.p`
  color: ${({ theme }) => theme.styles.colors.error};
  margin: 0 1rem 1rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.styles.boxModel.vertical};
`;
const InputsWrapper = styled.div`
  input {
    width: 80%;
    padding: ${({ theme }) => theme.styles.boxModel.full};
    border: 1px solid ${({ theme }) => theme.styles.colors.leadColorDark};
    background-color: ${({ theme }) => theme.styles.colors.backgroundButon};
    border-radius: 5px;
    margin: ${({ theme }) => theme.styles.boxModel.vertical};
  }
`;

const Container = styled.section`
  width: 300px;
  min-height: 100vh;
  padding: ${({ theme }) => theme.styles.boxModel.full};
  border-right: 1px solid ${({ theme }) => theme.styles.colors.leadColorDark};
  button {
    width: 150px;
    padding: ${({ theme }) => theme.styles.boxModel.full};
    border: 1px solid ${({ theme }) => theme.styles.colors.leadColorDark};
    background-color: ${({ theme }) => theme.styles.colors.leadColorLight};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      background-color: ${({ theme }) => theme.styles.colors.contrast1};
      border: 1px solid ${({ theme }) => theme.styles.colors.contrast2};
    }
  }
`;
