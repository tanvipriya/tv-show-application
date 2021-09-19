import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/**
 * Redux integration
 */
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
/**
 * Page integration
 */
import "../src/App.css";
import Home from "./pages/Home";
import SeasonShowComponent from "./component/Season/seasonShowComponent";
import DramaShowComponent from "./component/Drama/dramaShowComponent";

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* <Fragment> */}
        <Switch>
          {/* <Navbar></Navbar> */}
          <Route exact path="/" component={Home} />
          <Route path="/shows/:id" component={SeasonShowComponent} />
          <Route path="/:name" component={DramaShowComponent} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
