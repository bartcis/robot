import React from 'react';
import ReactDOM from 'react-dom';
import PlacementControler from '../components/PlacementControler';
import { render, getByTestId, fireEvent } from '@testing-library/react';

it('Renders without crashing', () => {
  const callback = jest.fn();
  const { container } = render(
    <PlacementControler parentCallback={callback} tests={true} />
  );
  ReactDOM.unmountComponentAtNode(container);
});

it('Placement form validation should work', () => {
  const callback = jest.fn();
  const { container } = render(
    <PlacementControler parentCallback={callback} tests={true} />
  );
  const xInput = getByTestId(container, 'xDataInput');
  const yInput = getByTestId(container, 'yDataInput');
  const dirInput = getByTestId(container, 'dirDataInput');
  const errorHook = getByTestId(container, 'errorHookTest');

  expect(errorHook.textContent).toEqual('x: false, y: false, d:false');

  fireEvent.change(xInput, { target: { value: '10' } });
  fireEvent.change(yInput, { target: { value: '10' } });
  fireEvent.change(dirInput, { target: { value: 'c' } });

  expect(errorHook.textContent).toEqual('x: true, y: true, d:true');
  const error = getByTestId(container, 'placementError');
  expect(error).toBeTruthy();

  fireEvent.change(xInput, { target: { value: '3' } });
  fireEvent.change(yInput, { target: { value: '3' } });
  fireEvent.change(dirInput, { target: { value: 'N' } });

  expect(errorHook.textContent).toEqual('x: false, y: false, d:false');
});

it('Placement form should set correct values', () => {
  const callback = jest.fn();
  const { container } = render(
    <PlacementControler parentCallback={callback} tests={true} />
  );
  const xInput = getByTestId(container, 'xDataInput');
  const yInput = getByTestId(container, 'yDataInput');
  const dirInput = getByTestId(container, 'dirDataInput');
  const positionHook = getByTestId(container, 'positionHookTest');

  expect(positionHook.textContent).toEqual('x: , y: , d:');

  fireEvent.change(xInput, { target: { value: '4' } });
  fireEvent.change(yInput, { target: { value: '4' } });
  fireEvent.change(dirInput, { target: { value: 'N' } });

  expect(positionHook.textContent).toEqual('x: 4, y: 4, d:N');
});
