import { ActionTypes } from "./types";
import axios from "axios";

export const setSeasonTvShowData = (payload) => {
  return {
    type: ActionTypes.SET_SEASON_SHOW_TV_ALL,
    payload: payload,
  };
};

export const getSeasonTvShowData = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setSeasonTvShowData(response.data));
      })
      .catch((err) => {});
  };
};
