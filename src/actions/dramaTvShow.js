import { ActionTypes } from "./types";
import axios from "axios";

export const setDramaTvShowData = (drama) => {
  return {
    type: ActionTypes.SET_DRAMA_SHOW_TV_ALL,
    drama,
  };
};

export const getDramaTvShowData = (url, id) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setDramaTvShowData(response.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
