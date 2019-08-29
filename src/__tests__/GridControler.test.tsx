import React from 'react';
import ReactDOM from 'react-dom';
import GridControler from '../components/GridControler';
import { render, getByTestId, fireEvent } from '@testing-library/react';

it('Renders without crashing', () => {
  const container = document.createElement('container');
  ReactDOM.render(<GridControler tests={true} />, container);
  ReactDOM.unmountComponentAtNode(container);
});

it('Grid size modification should work', () => {
  const { container } = render(<GridControler tests={true} />);
  const xControler = getByTestId(container, 'changeXsize');
  const yControler = getByTestId(container, 'changeYsize');
  const gridHook = getByTestId(container, 'gridHookTest');

  expect(gridHook.textContent).toEqual('h: 5, w: 5');

  fireEvent.change(xControler, { target: { value: '7' } });
  fireEvent.change(yControler, { target: { value: '3' } });

  setTimeout(() => {
    expect(gridHook.textContent).toEqual('h: 3, w: 7');
  }, 100);
});
