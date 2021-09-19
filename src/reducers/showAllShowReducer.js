import { ActionTypes } from "../actions/types";

const initialState = {
  payload: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SHOW_TV_ALL:
      return executeShowAllDataSucess(state, action);
    default:
      return state;
  }
}

const executeShowAllDataSucess = (state, action) => {
  return {
    ...state,
    payload: action.payload,
  };
};
