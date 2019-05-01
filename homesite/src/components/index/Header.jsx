import React from 'react';
import Container from 'react-bootstrap/Container';
import Scrollchor from 'react-scrollchor';
import { Button } from 'react-bootstrap';

function Header() {
	return (
		<header className='ee-header-section d-flex'>
			<Container className='text-center my-auto'>
				<h1 className='mb-1 text-success'>Emergency Electric Inc</h1>
				<h3 className='mb-5 text-success'>
					24 Hour Service | Licensed and Insured | Residential and Commercial
				</h3>
				<Scrollchor className='btn btn-danger btn-lg mr-4' to='#about'>
					Find Our More
				</Scrollchor>
				<Button href='/apply' size='lg' variant='success'>
					Apply Now
				</Button>
			</Container>
		</header>
	);
}

export default Header;
