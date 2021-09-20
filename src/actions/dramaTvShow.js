import { ActionTypes } from "./types";
import axios from "axios";

/**
 * @desc add method setDramaTvShowData based of payload
 */

export const setDramaTvShowData = (payload) => {
  return {
    type: ActionTypes.SET_DRAMA_SHOW_TV_ALL,
    payload: payload,
  };
};

export const getDramaTvShowData = (url) => {
  /**
   * @desc call the dispatch method through useEffect
   */
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setDramaTvShowData(response.data));
      })
      .catch((err) => {});
  };
};
