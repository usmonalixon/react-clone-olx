import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adDeleteReducer, adDetailsReducer, adListReducer, adSaveReducer } from "./reducers/adReducers";
import { userRegisterReducer, userSigninReducer, userUpdateReducer } from "./reducers/userReducers";
import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  adList: adListReducer,
  adDetails: adDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  adSave: adSaveReducer,
  adDelete: adDeleteReducer,
  userUpdate: userUpdateReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
