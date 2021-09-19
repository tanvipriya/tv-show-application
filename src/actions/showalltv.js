import { ActionTypes } from "./types";
import axios from "axios";

export const setAllShowData = (payload) => {
  return {
    type: ActionTypes.SET_SHOW_TV_ALL,
    payload,
  };
};

export const getAllShowTvData = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        console.log("response", response);
        dispatch(setAllShowData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
