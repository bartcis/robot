import React, { useState } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { styledTheme } from './components/designSystem/ThemeExport';

import App from './App';

import RobotContext from './components/context/RobotContext';

function AppWrapper() {
  const robotHook = useState({});

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
  @font-face {
    font-family: 'nunito_sansregular';
    src: url('/fonts/nunitosans-regular-webfont.woff2') format('woff2'),
      url('/fonts/nunitosans-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${() => styledTheme.styles.colors.backgroundBody};
    box-sizing: border-box;
  }

  h1 {
    color: ${() => styledTheme.styles.colors.font};
    font-family: 'nunito_sansregular';
    font-size: 1.5rem;
  }
`;

render(<AppWrapper />, document.getElementById('root'));
