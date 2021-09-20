import { ActionTypes } from "./types";
import axios from "axios";
/**
 * @desc add method setDramaTvShowData based of payload
 */
export const setAllShowData = (payload) => {
  return {
    type: ActionTypes.SET_SHOW_TV_ALL,
    payload: payload,
  };
};

export const getAllShowTvData = (url) => {
  /**
   * @desc call the dispatch method through useEffect
   */
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setAllShowData(response.data));
      })
      .catch((err) => {});
  };
};
