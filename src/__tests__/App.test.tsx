import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('Renders without crashing', () => {
  const container = document.createElement('container');
  ReactDOM.render(<App />, container);
  ReactDOM.unmountComponentAtNode(container);
});
