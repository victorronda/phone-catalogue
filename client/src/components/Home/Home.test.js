import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('should render Home component', () => {
let wrapper;
beforeEach(() => {
    const mockProps = { phones, isPending, request };
    wrapper = shallow(<Home store={mockProps} />)
})
	expect(wrapper).toMatchSnapshot();
});
