import { ActionTypes } from "../actions/types";

const initialState = {
  payload: [],
};
/**
 * Drama All Tv Show  functionality
 * @param {state, action} props Component props
 * @param {executeDramaSelectednDataSucess} props.action Add is in progress
 * @param {function} props.dramaShowReducer Type text callback function
 */

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
    payload: action.payload,
  };
};
