import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Application from './Application';
class MainPage extends Component {
	render() {
		return (
			<Row className='text-center'>
				<Col sm={2} className='bg-success text-light' />
				<Col sm={8}>
					<Application />
				</Col>
				<Col sm={2} className='bg-success text-light' />
			</Row>
		);
	}
}

export default MainPage;
