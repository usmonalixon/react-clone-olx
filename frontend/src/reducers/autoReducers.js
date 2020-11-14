import {
  AUTO_SAVE_REQUEST,
  AUTO_SAVE_SUCCESS,
  AUTO_SAVE_FAIL,
  AUTO_LIST_REQUEST,
  AUTO_LIST_SUCCESS,
  AUTO_LIST_FAIL,
  AUTO_DETAILS_REQUEST,
  AUTO_DETAILS_SUCCESS,
  AUTO_DETAILS_FAIL,
  AUTO_DELETE_REQUEST,
  AUTO_DELETE_SUCCESS,
  AUTO_DELETE_FAIL,
} from "../constants/autoConstants";

function autoSaveReducer(state = { auto: {} }, action) {
  switch (action.type) {
    case AUTO_SAVE_REQUEST:
      return { loading: true };
    case AUTO_SAVE_SUCCESS:
      return { loading: false, success: true, auto: action.payload };
    case AUTO_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function autoListReducer(state = { autos: [] }, action) {
  switch (action.type) {
    case AUTO_LIST_REQUEST:
      return { loading: true, autos: [] };
    case AUTO_LIST_SUCCESS:
      return { loading: false, autos: action.payload };
    case AUTO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function autoDetailsReducer(state = { auto: {} }, action) {
  switch (action.type) {
    case AUTO_DETAILS_REQUEST:
      return { loading: true };
    case AUTO_DETAILS_SUCCESS:
      return { loading: false, auto: action.payload };
    case AUTO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function autoDeleteReducer(state = { auto: {} }, action) {
  switch (action.type) {
    case AUTO_DELETE_REQUEST:
      return { loading: true };
    case AUTO_DELETE_SUCCESS:
      return { loading: false, auto: action.payload, success: true };
    case AUTO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { autoSaveReducer, autoListReducer, autoDetailsReducer, autoDeleteReducer };
