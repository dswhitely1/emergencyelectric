import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Scrollchor from 'react-scrollchor';
function Navigation() {
	return (
		<Navbar
			bg='success'
			variant='dark'
			expand='xl'
			fixed='top'
			className='text-uppercase'>
			<Container className='justify-content-center mb-md-2 mb-lg-0'>
				<Navbar.Toggle
					aria-controls='navbar'
					className='navbar-toggler-right border=0'
				/>
				<Navbar.Collapse
					id='navbar'
					className='text-center justify-content-center flex-column-md'>
					<Scrollchor
						className='d-lg-none shadow  nav-link text-light mr-0 font-weight-bold navbar-brand'
						to='#page-top'>
						Emergency Electric Inc
					</Scrollchor>
					<Scrollchor to='#page-top' className=' nav-link text-light'>
						Home
					</Scrollchor>
					<Scrollchor to='#about' className=' nav-link text-light'>
						About
					</Scrollchor>
					<Scrollchor to='#services' className=' nav-link text-light'>
						Services
					</Scrollchor>
					<Scrollchor
						to='#page-top'
						className='d-none d-lg-inline-block shadow  nav-link text-light mr-0 font-weight-bold navbar-brand'>
						Emergency Electric Inc
					</Scrollchor>
					<Scrollchor to='#testimonials' className=' nav-link text-light'>
						Testimonials
					</Scrollchor>
					<Scrollchor to='#goals' className=' nav-link text-light'>
						Goals
					</Scrollchor>
					<Scrollchor to='#contact' className=' nav-link text-light'>
						Contact
					</Scrollchor>
				</Navbar.Collapse>
				<Button
					variant='outline-primary'
					className='ml-auto'
					size='sm'
					href='tel:15027274923'>
					502-727-4923
				</Button>
			</Container>
		</Navbar>
	);
}

export default Navigation;
