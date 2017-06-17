import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {

	it('Renders without crashing', () => {
		shallow(<Game />);
	});

	it('should start a new game', () => {
		const wrapper = shallow(<Game />);

		wrapper.setState({
			guesses: [1, 4, 5, 8],
			feedback: 'test',
			correctAnswer: 8
		});

		wrapper.instance().newGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
	});

	it('should be able to make guesses', () => {
		const wrapper = shallow(<Game />);

		wrapper.setState({
			correctAnswer: 80
		});

		wrapper.instance().guess(1);
		expect(wrapper.state('guesses')).toEqual([1]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

		wrapper.instance().guess(50);
		expect(wrapper.state('guesses')).toEqual([1, 50]);
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

		wrapper.instance().guess(90);
		expect(wrapper.state('guesses')).toEqual([1, 50, 90]);
		expect(wrapper.state('feedback')).toEqual('You\'re Warm');

		wrapper.instance().guess(81);
		expect(wrapper.state('guesses')).toEqual([1, 50, 90, 81]);
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

		wrapper.instance().guess(80);
		expect(wrapper.state('guesses')).toEqual([1, 50, 90, 81, 80]);
		expect(wrapper.state('feedback')).toEqual('You got it!');
	});

});