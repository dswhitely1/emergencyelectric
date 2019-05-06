import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';

function Navigation() {
	return (
		<Navbar bg='primary' variant='dark' expand='sm' className='text-uppercase'>
			<Container className='justify-content-center mb-md-2 mb-lg-0'>
				<Nav.Link className='text-secondary' href='#'>
					Messages
				</Nav.Link>
				<Navbar.Brand className='shadow nav-link text-light mr-0 font-weight-bold'>Emergency Electric Inc</Navbar.Brand>
				<Nav.Link className='text-secondary' href='#'>
					Applications
				</Nav.Link>
			</Container>
		</Navbar>
	);
}

export default Navigation;
