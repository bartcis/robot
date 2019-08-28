import React, { useState } from 'react';
import { render } from 'react-dom';

import App from './App';
import RobotContext from './components/context/RobotContext';

function AppWrapper() {
  const robotHook = useState({
    visible: false,
    xPosition: 0,
    yPosition: 0,
    rotation: 0,
  });

  return (
    <React.StrictMode>
      <RobotContext.Provider value={robotHook}>
        <App />
      </RobotContext.Provider>
    </React.StrictMode>
  );
}

render(<AppWrapper />, document.getElementById('root'));
