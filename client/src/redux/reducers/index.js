import { combineReducers } from 'redux';
import { requestAllProducts } from './reducers';

const rootReducer = combineReducers({ requestAllProducts });

export default rootReducer;
