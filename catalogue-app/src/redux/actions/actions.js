import * as types from '../constants/constants';
import axios from 'axios';


export const requestAllProducts = () => dispatch => {
    dispatch({ type: types.REQUEST_PRODUCTS_PENDING });
    return axios.get('http://localhost:4000/phones')
        .then(response => response.data)
        .then(phones => {
            dispatch({ type: types.REQUEST_PRODUCTS_SUCCESS, payload: phones });
        })
        .catch(error =>
            dispatch({ type: types.REQUEST_PRODUCTS_FAILURE, payload: error })
        );

};



