import React from 'react';
import {mount, shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {

	const seedGuesses = [];
	beforeAll(() => {
		for (let i=1; i <= 10; i++) {
			seedGuesses.push(i);
		}
	});

	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('renders guess count', () => {
		const value = 8;
		const wrapper = shallow(<GuessCount count={value}/>);
		expect(wrapper.text()).toEqual((`Guess #${value}!`));
	});

});