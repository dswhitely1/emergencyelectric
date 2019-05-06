import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, Badge, Button } from 'react-bootstrap';

const Navigation = props => {
	console.log(props);
	return (
		<Navbar bg='primary' variant='dark' expand='sm' className='text-uppercase' sticky='top'>
			<Container className='justify-content-center mb-md-2 mb-lg-0'>
				<Button variant='outline-secondary' className='mr-auto'>
					MESSAGES:{' '}
					<Badge pill variant='light'>
						{
							props.messages === undefined ? 0 :
							props.messages}
					</Badge>
				</Button>
				<Navbar.Brand className='shadow nav-link text-light mr-0 font-weight-bold mr-auto'>
					Emergency Electric Inc
				</Navbar.Brand>
				<Button variant='outline-secondary'>
					APPLICATIONS:{' '}
					<Badge pill variant='light'>
						{
							props.applications === undefined ? 0 :
							props.applications}
					</Badge>
				</Button>
			</Container>
		</Navbar>
	);
};

export default Navigation;
