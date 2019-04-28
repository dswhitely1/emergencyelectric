import React, { Component } from 'react';
import Navigation from './Navigation';
import SideMenu from './SideMenu';
import MessageDisplay from './MessageDisplay';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Row style={{ marginTop: '65px' }}>
					<Col
						xs={2}
						className='bg-dark d-flex flex-column align-items-center p-2'>
						<SideMenu />
					</Col>
					<Col xs={10}>
						<MessageDisplay />
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
