import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faMobile,
	faEnvelope,
	faCopyright,
} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
	return (
		<footer className='bg-dark text-light text-center ee-content-section pb-0 pt-sm-5'>
			<Container className='my-auto'>
				<Row className='mb-md-1'>
					<Col lg={4} className='mb-md-3'>
						<h3 className='mb-4'>Emergency Electric Inc</h3>
						<p className='lead'>
							7525 Main St NE<br />Lanesville, IN 47136
						</p>
					</Col>
					<Col lg={4} className='mb-md-3'>
						<h3 className='mb-4'>Contacts</h3>
						<ButtonGroup vertical className='mb-sm-3'>
							<Button variant='success' href='tel:18129526014' size='lg'>
								<FontAwesomeIcon icon={faPhone} className='mr-2' />
								{`(812) 952-6014`}
							</Button>
							<Button variant='success' href='tel:15027274923' size='lg'>
								<FontAwesomeIcon icon={faMobile} className='mr-2' />
								{`(502) 727-4923`}
							</Button>
							<Button
								size='lg'
								href='mailto:emergency_electric.com'
								variant='success'>
								<FontAwesomeIcon icon={faEnvelope} className='mr-2' />
								{`Email Us`}
							</Button>
						</ButtonGroup>
					</Col>
					<Col lg={4} className='mb-md-3'>
						<h3 className='mb-4'>Services</h3>
						<p className='lead'>
							24 Hour Service<br />Licensed & Insured<br />Residential and
							Commercial
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={12} className=''>
						<p className='text-center'>
							<FontAwesomeIcon icon={faCopyright} />
							{` 2019 - All Rights Reserved`}
						</p>
						<p className='text-center'>Designed by</p>
						<Button size='sm' variant='info' href='https://www.donwhitely.com'>
							Digital Solutions by Don
						</Button>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
