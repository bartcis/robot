import React from 'react';
import ReactDOM from 'react-dom';
import Controlers from '../components/Controlers';

it('Renders without crashing', () => {
  const container = document.createElement('container');
  ReactDOM.render(<Controlers />, container);
  ReactDOM.unmountComponentAtNode(container);
});
