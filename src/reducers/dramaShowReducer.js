import { ActionTypes } from "../actions/types";

const initialState = {
  payload: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_DRAMA_SHOW_TV_ALL:
      return executeDramaSelectednDataSucess(state, action);
    default:
      return state;
  }
}

const executeDramaSelectednDataSucess = (state, action) => {
  return {
    ...state,
    payload: action.drama,
  };
};
