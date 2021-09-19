import { ActionTypes } from "../actions/types";

const initialState = {
  payload: [],
};

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
    payload: action.season,
  };
};
