import React, { Component } from "react";
import logo from "img/conpass.png";
import "./App.css";

// Redux implementation
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducers from "./redux";

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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
