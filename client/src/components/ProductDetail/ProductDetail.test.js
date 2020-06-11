import { shallow } from 'enzyme';
import React from 'react';
import ProductDetail from './ProductDetail';

it('should render ProductDetail component', () => {
    let wrapper;
    beforeEach(() => {
        const mockPhones = { phones };
        const mockURLId = 1
        wrapper = shallow(<ProductDetail id={mockURLId} phones={mockPhones} />)
    })
    expect(wrapper).toMatchSnapshot();
});