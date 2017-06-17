import React from 'react';
import {mount, shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal >', () => {

	it('renders without crashing', () => {
		shallow(<InfoModal />);
	});

	it('should fire onClose on click', () => {
		const callback = jest.fn();
		const wrapper = mount(<InfoModal onClose={callback} />);
		const close = wrapper.find('.close');
		close.simulate('click');
		expect(callback).toHaveBeenCalled();
	});

});