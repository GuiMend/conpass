import React, { Component } from "react";

// React-Router implementation
import { BrowserRouter as Router } from "react-router-dom";

// Redux implementation
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducers from "./redux";

// Material UI implementation of custom theme
import { MuiThemeProvider } from "@material-ui/core/styles";
import muitheme from "utils/theme";

// Import Webapp screens
import Root from "screens/Root";

const reducer = combineReducers({
  ...reducers
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={muitheme}>
            <Root />
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
