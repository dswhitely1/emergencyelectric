import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Application from './Application';
class MainPage extends Component {
	render() {
		return (
			<Row className='text-center'>
				<Col sm={2} className='bg-primary text-light' />
				<Col sm={8} className='bg-light'>
					<Application />
				</Col>
				<Col sm={2} className='bg-primary text-light' />
			</Row>
		);
	}
}

export default MainPage;
