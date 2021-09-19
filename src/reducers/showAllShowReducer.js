import { ActionTypes } from "../actions/types";

const initialState = {
  payload: [],
};

// export default showAllShowReducer;

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SHOW_TV_ALL:
      //   console.log("action===>", action);
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
