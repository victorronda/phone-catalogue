import { shallow } from 'enzyme';
import React from 'react';
import ProductList from './ProductList';

it('should render ProductList component', () => {
    const mockPhones = [
        {
            id: 5,
            name: 'Nokia',
            ram: 2,
            imageFileName: 'http://localhost:4000/images/IPhone_7.png'
        },
        {
            id: 2,
            name: 'Apple',
            ram: 4,
            imageFileName: 'http://localhost:4000/images/Galaxy_S7.png'
        }

    ];
    expect(shallow(<ProductList phones={mockPhones} />)).toMatchSnapshot();
});