import { ActionTypes } from "../actions/types";

const initialState = {
  payload: [],
};

/**
 * Season All Tv Show  functionality
 * @param {state, action} props Component props
 * @param {executeSeasonSelectednDataSucess} props.action Add is in progress
 * @param {function} props.seasonShowReducer Type text callback function
 */

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SEASON_SHOW_TV_ALL:
      return executeSeasonSelectednDataSucess(state, action);
    default:
      return state;
  }
}

const executeSeasonSelectednDataSucess = (state, action) => {
  return {
    ...state,
    payload: action.payload,
  };
};
