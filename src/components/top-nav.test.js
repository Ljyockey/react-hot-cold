import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {

	it('renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('should fire onInfo on click', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onInfo={callback} />);
		const what = wrapper.find('.what');	
		what.simulate('click');
		expect(callback).toHaveBeenCalled();
	});

	it('should fire onNewGame on click', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onNewGame={callback} />);
		const newClass = wrapper.find('.new');
		newClass.simulate('click');
		expect(callback).toHaveBeenCalled;
	});

});