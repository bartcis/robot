import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../components/Table';

it('Renders without crashing', () => {
  const container = document.createElement('container');
  ReactDOM.render(<Table />, container);
  ReactDOM.unmountComponentAtNode(container);
});
