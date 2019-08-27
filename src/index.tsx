import React, { useState } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { styledTheme } from './components/designSystem/ThemeExport';

import App from './App';

import RobotContext from './components/context/RobotContext';

function AppWrapper() {
  const robotHook = useState({
    visible: false,
    xPosition: 0,
    yPosition: 0,
    direction: 0,
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={styledTheme}>
        <RobotContext.Provider value={robotHook}>
          <GlobalStyle />
          <App />
        </RobotContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${() => styledTheme.styles.colors.backgroundBody};
    box-sizing: border-box;
  }

  h1, p, label {
    color: ${() => styledTheme.styles.colors.font};
    font-family: 'verdana';
  }

  h1 {
    font-size: 1.5rem;
  }
`;

render(<AppWrapper />, document.getElementById('root'));
