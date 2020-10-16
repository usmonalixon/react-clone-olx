import {
  AD_DETAILS_FAIL,
  AD_DETAILS_REQUEST,
  AD_DETAILS_SUCCESS,
  AD_LIST_FAIL,
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_SAVE_FAIL,
  AD_SAVE_REQUEST,
  AD_SAVE_SUCCESS,
} from "../constants/adConstants";

function adListReducer(state = { ads: [] }, action) {

  switch (action.type) {
    case AD_LIST_REQUEST:
      return { loading: true };
    case AD_LIST_SUCCESS:
      return { loading: false, ads: action.payload };
    case AD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function adDetailsReducer(state = { ad: {} }, action) {

  switch (action.type) {
    case AD_DETAILS_REQUEST:
      return { loading: true };
    case AD_DETAILS_SUCCESS:
      return { loading: false, ad: action.payload };
    case AD_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function adSaveReducer(state = { ad: {} }, action) {
  switch (action.type) {
    case AD_SAVE_REQUEST:
      return { loading: true };
    case AD_SAVE_SUCCESS:
      return { loading: false, success: true, ad: action.payload };
    case AD_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { adListReducer, adDetailsReducer, adSaveReducer };
