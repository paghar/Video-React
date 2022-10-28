//@flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import AppGlobalStyle from './globalStyles';
import Routes from 'routes';
import history from 'helpers/history';

function App() {
  return (
    <>
      <AppGlobalStyle />
      <ThemeProvider theme={{ size: 'medium', mode: 'dark' }}>
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
