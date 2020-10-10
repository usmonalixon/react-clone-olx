import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { adDetailsReducer, adListReducer } from './reducers/adReducers';


const initialState = {};
const reducer = combineReducers({
    adList: adListReducer,
    adDetails: adDetailsReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
