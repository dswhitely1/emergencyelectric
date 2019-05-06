import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
	return (
		<Navbar bg='dark' variant='dark' sticky='bottom'>
			<p className='text-muted small m-auto'>Copyright 2019 - Emergency Electric INC</p>
		</Navbar>
	);
};

export default Footer;
