import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function BottomNavigation() {
	return (
		<Navbar bg='success' variant='dark' expand='sm' className='text-uppercase'>
			<Container className='justify-content-center mb-md-2 mb-lg-0'>
				<Button href='/' variant='outline-light'>
					Return Home
				</Button>
			</Container>
		</Navbar>
	);
}

export default BottomNavigation;
