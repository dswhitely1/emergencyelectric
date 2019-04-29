import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Scrollchor from 'react-scrollchor';
function Navigation() {
	return (
		<Navbar bg='success' variant='dark' expand='sm' className='text-uppercase'>
			<Container className='justify-content-center mb-md-2 mb-lg-0'>
				<Navbar.Brand className='shadow nav-link text-light mr-0 font-weight-bold'>
					Emergency Electric Inc
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default Navigation;
