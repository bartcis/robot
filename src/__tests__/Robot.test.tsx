import React from 'react';
import ReactDOM from 'react-dom';
import Robot from '../components/Report';

it('Renders without crashing', () => {
  const container = document.createElement('container');
  ReactDOM.render(<Robot />, container);
  ReactDOM.unmountComponentAtNode(container);
});
