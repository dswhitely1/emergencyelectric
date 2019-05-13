import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ApplicationPage from './ApplicationPage';

import AdminHomePage from './admin/AdminHomePage';
const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
	render() {
		return (
			<div className='bg-primary'>
				<Switch>
					<Route exact path={`${baseUrl}/`} component={HomePage} />
					<Route exact path={`${baseUrl}/apply`} component={ApplicationPage} />
					<Route exact page={`${baseUrl}/admin`} component={AdminHomePage} />
				</Switch>
			</div>
		);
	}
}

export default App;
