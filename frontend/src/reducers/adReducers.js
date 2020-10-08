import { AD_LIST_FAIL, AD_LIST_REQUEST, AD_LIST_SUCCESS } from "../constants/adConstants";

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
export {adListReducer}