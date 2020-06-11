import * as reducers from './reducers';
import * as types from '../constants/constants';

const initialStateProducts = {
	phones: [],
	isPending: false,
	error: ''
};

describe('requestPhones reducer', () => {
	it('should handle REQUEST_PRODUCTS_PENDING action', () => {
		expect(
			reducers.requestAllProducts(initialStateProducts, {
				type: types.REQUEST_PRODUCTS_PENDING
			})
		).toEqual({
			phones: [],
			error: '',
			isPending: true
		});
	});

	it('should handle REQUEST_PRODUCTS_SUCCESS action', () => {
		expect(
			reducers.requestAllProducts(initialStateProducts, {
				type: types.REQUEST_PRODUCTS_SUCCESS,
				payload: [
					{
						id: 6,
						name: 'MI A2',
						color: 'black',
						price: 179
					}
				]
			})
		).toEqual({
			phones: [
				{
					id: 6,
					name: 'MI A2',
					color: 'black',
					price: 179
				}
			],
			error: "",
			isPending: false
		});
	});

	it('should handle REQUEST_PRODUCTS_FAILURE action', () => {
		expect(
			reducers.requestAllProducts(initialStateProducts, {
				type: types.REQUEST_PRODUCTS_FAILURE,
				payload: 'testing error'
			})
		).toEqual({
			phones: [],
			error: 'testing error',
			isPending: false
		});
	});
});
