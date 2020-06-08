import { combineReducers} from 'redux';
import requestAllProducts from './allProductsReducer'


const rootReducer = combineReducers({ requestAllProducts });

export default rootReducer;


