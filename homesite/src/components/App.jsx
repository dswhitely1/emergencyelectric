import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ApplicationPage from './ApplicationPage';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';
import DisplayApplication from './application/DisplayApplication';
const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path={`${baseUrl}/`} component={HomePage} />
					<Route exact path={`${baseUrl}/apply`} component={ApplicationPage} />
				</Switch>
				<DisplayApplication />
				<Button className='ee-24-hour-number' size='sm' variant='outline-secondary' href='tel:15027274823'>
					<span>{`(502) 727-4823`}</span>
				</Button>
				<Button className='apply-button' variant='outline-success' href={`${baseUrl}/apply`}>
					<span>Now Hiring</span>
				</Button>
			</div>
		);
	}
}

export default App;
