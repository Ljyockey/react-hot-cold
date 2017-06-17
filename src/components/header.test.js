import React from 'react';
import {mount, shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {

	it('renders without crashing', () => {
		shallow(<Header />);
	});

	it('loads without InfoModal', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('#modal').exists()).toEqual(false);
	});

	it('should render InfoModal on toggle', () => {
		const wrapper = mount(<Header />);
		wrapper.instance().toggleInfoModal(true);
		expect(wrapper.find('#modal').exists()).toEqual(true);
	});

});