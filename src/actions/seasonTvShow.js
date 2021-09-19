import { ActionTypes } from "./types";
import axios from "axios";

export const setSeasonTvShowData = (season) => {
  return {
    type: ActionTypes.SET_SEASON_SHOW_TV_ALL,
    season,
  };
};

export const getSeasonTvShowData = (url, id) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        console.log("response", response);
        dispatch(setSeasonTvShowData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
