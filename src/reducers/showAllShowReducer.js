import { ActionTypes } from "../actions/types";

const initialState = {
  payload: [],
};

/**
 * Show All Tv Show functionality
 * @param {state, action} props Component props
 * @param {executeShowAllDataSucess} props.action Add is in progress
 * @param {function} props.showAllßShowReducer Type text callback function
 */

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
