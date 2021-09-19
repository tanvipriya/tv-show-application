import { combineReducers } from "redux";
import showAllShowReducer from "./showAllShowReducer";
import seasonShowReducer from "./seasonShowReducer";
import dramaShowReducer from "./dramaShowReducer";

const reducers = combineReducers({
  showAllShowReducer,
  seasonShowReducer,
  dramaShowReducer,
});

export default reducers;
