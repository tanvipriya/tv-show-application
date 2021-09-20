import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import App from "./App";

import "./index.css";

/**
 * Create an instance using the default constructor
 * @param {state} reducer Component props
 * @param {method} loggerMiddleware store props
 */
const loggerMiddleware = createLogger();

/**
 * Create an custom store the default constructor
 * @param {thunkMiddleware} redux react-redux props
 * @param {method} store store props
 */
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
