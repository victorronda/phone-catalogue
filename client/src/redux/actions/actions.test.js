import * as actions from './actions';
import * as types from '../constants/constants';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios'

jest.mock('../store');

const mockStore = configureStore([thunk]);

describe('Fetching actions', () => {
  
    it('should dispatch PENDING action', () => {
        const store = mockStore();
        store.dispatch(actions.requestAllProducts());
        const action = store.getActions();
        const expectedPayload = {type: types.REQUEST_PRODUCTS_PENDING}
        expect(action[0]).toEqual(expectedPayload);
    })

    it('should dispatch SUCCESS action',  async () => {
        const mockData = {phones: ['test phone'] };
        mockAxios.get.mockImplementationOnce(() => Promise.resolve({data: mockData}));
        const expectedPayload = [
            { type: types.REQUEST_PRODUCTS_PENDING },
            {
                type: types.REQUEST_PRODUCTS_SUCCESS,
                payload: mockData
            }
        ];        
        const store = mockStore();
        await store.dispatch(actions.requestAllProducts());
        expect(store.getActions()).toEqual(expectedPayload);       
    })

    it('should dispatch FAILURE action',  async () => {
        const mockData = new Error('Invalid JSON')
        mockAxios.get.mockImplementationOnce(() => Promise.reject(mockData));
        const expectedPayload = [
            { type: types.REQUEST_PRODUCTS_PENDING },
            {
                type: types.REQUEST_PRODUCTS_FAILURE,
                payload:  mockData
            }
        ];        
        const store = mockStore();
        await store.dispatch(actions.requestAllProducts());
        expect(store.getActions()).toEqual(expectedPayload);       
    })


});