import * as types from './singleProductActions';
import axios from 'axios';


export const requestPhones = () => dispatch => {
    dispatch({ type: types.REQUEST_PRODUCTS_PENDING });
    return axios.get('http://localhost:4000/phones')
        .then(response => console.log(response.data))
        .then(phones => {
            dispatch({ type: types.REQUEST_PRODUCTS_SUCCESS, payload: phones });
        })
        .catch(error =>
            dispatch({ type: types.REQUEST_PRODUCTS_FAILURE, payload: error })
        );

       /*  .then(response => {
            let contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json();
            } else {
                throw new Error('Invalid JSON');
            }
        })
        .then(phones => {
            dispatch({ type: types.REQUEST_PRODUCTS_SUCCESS, payload: phones });
        })
        .catch(error =>
            dispatch({ type: types.REQUEST_PRODUCTS_FAILURE, payload: error })
        ); */
};