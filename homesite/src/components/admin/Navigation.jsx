import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, Badge, Button } from 'react-bootstrap';
import { adminChangeRoute } from '../../actions';
class Navigation extends Component {
	onButtonClick = e => {
		console.log(e.target.value);
		this.props.adminChangeRoute(e.target.value);
	};
	render() {
		console.log(this.props);

		return (
			<Navbar bg='primary' variant='dark' expand='sm' className='text-uppercase' sticky='top'>
				<Container className='justify-content-center mb-md-2 mb-lg-0'>
					<Button variant='outline-secondary' className='mr-auto' value={0} onClick={this.onButtonClick}>
						MESSAGES:{' '}
						<Badge pill variant='light'>
							{
								this.props.messages === undefined ? 0 :
								this.props.messages}
						</Badge>
					</Button>
					<Navbar.Brand className='shadow nav-link text-light mr-0 font-weight-bold mr-auto'>
						Emergency Electric Inc
					</Navbar.Brand>
					<Button variant='outline-secondary' value={1} onClick={this.onButtonClick}>
						APPLICATIONS:{' '}
						<Badge pill variant='light'>
							{
								this.props.applications === undefined ? 0 :
								this.props.applications}
						</Badge>
					</Button>
				</Container>
			</Navbar>
		);
	}
}
const mapStateToProps = state => {
	return { admPage: state.adminPage };
};

export default connect(mapStateToProps, { adminChangeRoute })(Navigation);
