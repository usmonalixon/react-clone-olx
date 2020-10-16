import {
  AD_DETAILS_FAIL,
  AD_DETAILS_REQUEST,
  AD_DETAILS_SUCCESS,
  AD_LIST_FAIL,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_SAVE_SUCCESS,
  AD_SAVE_FAIL,
  AD_SAVE_REQUEST
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

const saveAd = (ad) => async (dispatch, getState) => {
  try {
    dispatch({ type: AD_SAVE_REQUEST, payload: ad });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!ad._id) {
      const { data } = await axios.post('/api/ads', ad, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: AD_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        '/api/ads/' + ad._id,
        ad,
        {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        }
      );
      dispatch({ type: AD_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: AD_SAVE_FAIL, payload: error.message });
  }
};

const detailsAd = (adId) => async (dispatch) => {
  try {
    dispatch({ type: AD_DETAILS_REQUEST, payload: adId });
    const { data } = await axios.get("/api/ads/" + adId);
    dispatch({ type: AD_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AD_DETAILS_FAIL, payload: error.message });
  }
};

export { listAds, detailsAd, saveAd };
