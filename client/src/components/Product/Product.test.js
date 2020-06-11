import { shallow } from 'enzyme';
import React from 'react';
import Product from './Product';

it('should render Product component', () => {
    const mockPhone = [
        {
            id: 5,
            name: 'Nokia',
            ram: 2,
            imageFileName: 'http://localhost:4000/images/IPhone_7.png'
        }
    ];
    expect(shallow(<Product phone={mockPhone} />)).toMatchSnapshot();
});