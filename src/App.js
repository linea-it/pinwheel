import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from './routes';
import theme from './themes/linea';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
