import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Application from './Application';
class MainPage extends Component {
	render() {
		return (
			<Row className='text-center'>
				<Col xs={2} className='bg-success text-light'>
					<p>Side Menu</p>
				</Col>
				<Col xs={8}>
					<Application />
				</Col>
				<Col xs={2} className='bg-success text-light'>
					<p>Right Content</p>
				</Col>
			</Row>
		);
	}
}

export default MainPage;
