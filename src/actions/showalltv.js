import { ActionTypes } from "./types";
import axios from "axios";

export const setAllShowData = (payload) => {
  return {
    type: ActionTypes.SET_SHOW_TV_ALL,
    payload: payload,
  };
};

export const getAllShowTvData = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setAllShowData(response.data));
      })
      .catch((err) => {});
  };
};
