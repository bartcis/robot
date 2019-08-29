import React from 'react';
import ReactDOM from 'react-dom';
import MovmentControler from '../components/MovmentControler';
import Report from '../components/Report';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import RobotContext from '../components/context/RobotContext';

it('Renders move buttons without crashing', () => {
  const container = document.createElement('container');
  ReactDOM.render(<MovmentControler tests={true} />, container);
  ReactDOM.unmountComponentAtNode(container);
});

it('Renders report without crashing', () => {
  const container = document.createElement('container');
  ReactDOM.render(<Report />, container);
  ReactDOM.unmountComponentAtNode(container);
});

it('Should update robot state on move actions', () => {
  const { container } = render(<MovmentControler tests={true} />);

  const leftAction = getByTestId(container, 'turnLeftTest');
  const rightAction = getByTestId(container, 'turnRightTest');
  const moveAction = getByTestId(container, 'moveTest');
  const robotHook = getByTestId(container, 'robotHookTest');

  expect(robotHook.textContent).toEqual('y: 0, x: 0, d: N');

  fireEvent.click(rightAction);
  setTimeout(() => {
    expect(robotHook.textContent).toEqual('y: 0, x: 0, d: E');
  }, 10);
  fireEvent.click(moveAction);
  fireEvent.click(moveAction);
  setTimeout(() => {
    expect(robotHook.textContent).toEqual('y: 0, x: 2, d: E');
  }, 10);
  fireEvent.click(leftAction);
  setTimeout(() => {
    expect(robotHook.textContent).toEqual('y: 0, x: 2, d: N');
  }, 10);
  fireEvent.click(moveAction);
  fireEvent.click(moveAction);
  fireEvent.click(moveAction);
  setTimeout(() => {
    expect(robotHook.textContent).toEqual('y: 3, x: 2, d: N');
  }, 10);
});
