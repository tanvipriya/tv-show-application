import { routerMiddleware } from "connected-react-router";
import { isNil, reject } from "ramda";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import history from "../src/history/index";
import reducers from "../src/reducers/index";

/**
 * @param {function} Devtool Extention - description
 */
window.__REDUX_DEVTOOLS_EXTENSION__ =
  window.__REDUX_DEVTOOLS_EXTENSION__ ||
  function (f) {
    return f;
  };

/**
 * @param {method} add middlewares roter- description
 */
const middlewares = reject(isNil)([
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  window.__REDUX_DEVTOOLS_EXTENSION__(),
]);

/**
 * @param {method} add createStoreWithMiddleWare router- description
 */
export const createStoreWithMiddleWare = compose(...middlewares)(createStore);
export default createStoreWithMiddleWare(reducers);
