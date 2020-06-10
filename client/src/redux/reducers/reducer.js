import * as types from '../constants/constants';

const initialStateProducts = {
	phones: [],
	isPending: false,
	error: ''
};

const requestAllProducts = (state = initialStateProducts, action = {}) => {
	switch (action.type) {
		case types.REQUEST_PRODUCTS_PENDING:
			return { ...state, isPending: true };
		case types.REQUEST_PRODUCTS_SUCCESS:
			return { ...state, phones: action.payload, isPending: false };
		case types.REQUEST_PRODUCTS_FAILURE:
			return { ...state, error: action.payload, isPending: false };
		default:
			return state;
	}
};

export default requestAllProducts;
