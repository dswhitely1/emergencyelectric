import React, { Component } from 'react';
import Navigation from './index/Navigation';
import Header from './index/Header';
export class App extends Component {
	render() {
		return (
			<div id='page-top'>
				<Navigation />
				<Header />
			</div>
		);
	}
}
export default App;
