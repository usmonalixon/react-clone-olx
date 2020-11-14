import Axios from "axios";
import {
  AUTO_DELETE_FAIL,
  AUTO_DELETE_REQUEST,
  AUTO_DELETE_SUCCESS,
  AUTO_DETAILS_FAIL,
  AUTO_DETAILS_REQUEST,
  AUTO_DETAILS_SUCCESS,
  AUTO_LIST_FAIL,
  AUTO_LIST_REQUEST,
  AUTO_LIST_SUCCESS,
  AUTO_SAVE_FAIL,
  AUTO_SAVE_REQUEST,
  AUTO_SAVE_SUCCESS,
} from "../constants/autoConstants";

const saveAuto = (auto) => async (dispatch, getState) => {
  try {
    dispatch({ type: AUTO_SAVE_REQUEST, payload: auto });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!auto._id) {
      const { data } = await Axios.post("/api/autos", auto, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({ type: AUTO_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put("/api/autos/" + auto._id, auto, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({ type: AUTO_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: AUTO_SAVE_FAIL, payload: error.message });
  }
};
const listAuto = (category2 = "", searchKeyword2 = "", sortAuto = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: AUTO_LIST_REQUEST });
    const { data } = await Axios.get(
      "/api/autos?category2=" +
        category2 +
        "&searchKeyword2=" +
        searchKeyword2 +
        "&sortAuto=" +
        sortAuto
    );
    dispatch({ type: AUTO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AUTO_LIST_FAIL, payload: error.message });
  }
};
const detailsAuto = (autoId) => async (dispatch) => {
  try {
    dispatch({ type: AUTO_DETAILS_REQUEST, payload: autoId });
    const { data } = await Axios.get("/api/autos/" + autoId);
    dispatch({ type: AUTO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: AUTO_DETAILS_FAIL, payload: error.message });
  }
};

const deleteAuto = (autoId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: AUTO_DELETE_REQUEST, payload: autoId });
    const { data } = await Axios.delete("/api/ads/" + autoId, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: AUTO_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: AUTO_DELETE_FAIL, payload: error.message });
  }
};


export { saveAuto, listAuto, detailsAuto, deleteAuto };
