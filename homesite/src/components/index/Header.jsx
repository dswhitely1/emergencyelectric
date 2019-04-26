import React from 'react';
import Container from 'react-bootstrap/Container';
import Scrollchor from 'react-scrollchor';
import '../../emergency_electric.min.css';
function Header() {
	return (
		<header className='ee-header-section d-flex'>
			<Container className='text-center my-auto'>
				<h1 className='mb-1 text-light'>Emergency Electric Inc</h1>
				<h3 className='mb-5 text-light'>
					24 Hour Service | Licensed and Insured | Residential and Commercial
				</h3>
				<Scrollchor className='btn btn-danger btn-lg' to='#about'>
					Find Our More
				</Scrollchor>
			</Container>
		</header>
	);
}

export default Header;
