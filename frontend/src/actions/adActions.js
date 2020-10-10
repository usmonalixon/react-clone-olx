import {
  AD_DETAILS_FAIL,
  AD_DETAILS_REQUEST,
  AD_DETAILS_SUCCESS,
  AD_LIST_FAIL,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
} from "../constants/adConstants";
import axios from "axios";

const listAds = () => async (dispatch) => {
  try {
    dispatch({ type: AD_LIST_REQUEST });
    const { data } = await axios.get("/api/ads");
    dispatch({ type: AD_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AD_LIST_FAIL, payload: error.message });
  }
};
const detailsAd = (adId) => async (dispatch) => {
  try {
    dispatch({ type: AD_DETAILS_REQUEST, payload: adId });
    const { data } = await axios.get('/api/ads/' + adId);
    dispatch({ type: AD_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AD_DETAILS_FAIL, payload: error.message });
  }
};

export { listAds, detailsAd };
