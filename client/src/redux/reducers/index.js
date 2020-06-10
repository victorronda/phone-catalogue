import { combineReducers } from 'redux';
import requestAllProducts from './reducer';

const rootReducer = combineReducers({ requestAllProducts });

export default rootReducer;
