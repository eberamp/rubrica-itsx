import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'
import Body from "./js/components/containers/Body"

// TODO Move theme to a separate file specific to themes
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1E88E5',
    },
    secondary: {
      main: '#c51162',
    },
  },
});

class App extends Component {
  render() {
    return (
      
      <Router basename={process.env.PUBLIC_URL}>
        <MuiThemeProvider theme={theme}>
          <Body></Body>
        </MuiThemeProvider>
      </Router>
     
    );
  }
}

export default withStyles({ withTheme: true })(App);
