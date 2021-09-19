import { ActionTypes } from "./types";
import axios from "axios";

export const setDramaTvShowData = (payload) => {
  return {
    type: ActionTypes.SET_DRAMA_SHOW_TV_ALL,
    payload: payload,
  };
};

export const getDramaTvShowData = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setDramaTvShowData(response.data));
      })
      .catch((err) => {});
  };
};
