import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import myTheme from './themes';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store";

const miTheme = createTheme(myTheme);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <ThemeProvider theme={miTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </div>
);

export default App;
