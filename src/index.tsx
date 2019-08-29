import React, { useState } from 'react';
import { render } from 'react-dom';

import App from './App';
import RobotContext from './components/context/RobotContext';
import GridContext from './components/context/GridContext';
import KeyContext from './components/context/KeyContext';

function AppWrapper() {
  const robotHook = useState({
    visible: false,
    xPosition: 0,
    yPosition: 0,
    rotation: 0,
    direction: 'N',
  });
  const gridHook = useState({
    height: 5,
    width: 5,
    unitSize: 100,
  });
  const keyHook = useState({
    key: '',
    count: 0,
  });

  return (
    <React.StrictMode>
      <KeyContext.Provider value={keyHook}>
        <RobotContext.Provider value={robotHook}>
          <GridContext.Provider value={gridHook}>
            <App />
          </GridContext.Provider>
        </RobotContext.Provider>
      </KeyContext.Provider>
    </React.StrictMode>
  );
}

render(<AppWrapper />, document.getElementById('root'));
