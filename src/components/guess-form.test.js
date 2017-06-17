import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

	it('renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('should fire the onGuess function when button is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback}/>);
		const value = "8";
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value);

	});

	it('should clear input field when button is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback} />);
		const value = "8";
		const input = wrapper.find('input[type="text"]');
		input.node.value = value;
		wrapper.simulate('submit');
		expect(input.node.value).toEqual("");
	});

});