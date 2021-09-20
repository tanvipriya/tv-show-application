import { ActionTypes } from "./types";
import axios from "axios";

/**
 * @desc add method setDramaTvShowData based of payload
 */

export const setSeasonTvShowData = (payload) => {
  return {
    type: ActionTypes.SET_SEASON_SHOW_TV_ALL,
    payload: payload,
  };
};

export const getSeasonTvShowData = (url) => {
  /**
   * @desc call the dispatch method through useEffect
   */
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setSeasonTvShowData(response.data));
      })
      .catch((err) => {});
  };
};
