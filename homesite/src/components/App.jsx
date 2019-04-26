import React, { Component } from 'react';
import Navigation from './index/Navigation';
import Header from './index/Header';
import About from './index/About';
import Services from './index/Services';
import Testimonials from './index/Testimonials';
import Goals from './index/Goals';

import '../emergency_electric.min.css';
export class App extends Component {
	render() {
		return (
			<div id='page-top'>
				<Navigation />
				<Header />
				<About />
				<Services />
				<Testimonials />
				<Goals />
			</div>
		);
	}
}
export default App;
