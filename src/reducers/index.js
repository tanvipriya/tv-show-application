import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import showAllShowReducer from "./showAllShowReducer";
import seasonShowReducer from "./seasonShowReducer";
import dramaShowReducer from "./dramaShowReducer";

const reducers = combineReducers({
  showAllShowReducer,
  seasonShowReducer,
  dramaShowReducer,
  // router: connectRouter(history),
});

export default reducers;
