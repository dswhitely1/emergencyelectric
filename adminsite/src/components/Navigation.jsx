import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar
			bg='dark'
			variant='dark'
			expand='sm'
			fixed='top'
			className='text-uppercase'>
			<Navbar.Brand className='font-weight-bold mr-auto'>
				Emergency Electric INC
			</Navbar.Brand>
			<Nav.Link as='button' className='btn-sm btn-info'>
				Register
			</Nav.Link>
			<Nav.Link as='button' className='btn-sm btn-info ml-2'>
				Sign In
			</Nav.Link>
		</Navbar>
	);
};

export default Navigation;
