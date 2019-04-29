import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ApplicationPage from './ApplicationPage';

const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path={`${baseUrl}/`} component={HomePage} />
					<Route exact path={`${baseUrl}/apply`} component={ApplicationPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
