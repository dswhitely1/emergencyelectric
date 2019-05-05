import React from 'react';
import logo from '../../images/EmergencyElectricLogo.svg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobile, faEnvelope, faCopyright, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<footer className='bg-dark text-secondary text-center ee-content-section pb-0 pt-sm-5'>
			<Container className='my-auto'>
				<h3 className='text-center'>Contacts</h3>
				<Row className='mb-3'>
					<Col md={3}>
						<p className='text-center lead'>Office</p>
						<Button variant='primary' href='tel:18129526014'>
							{' '}
							<FontAwesomeIcon icon={faPhone} className='mr-2' />
							{`(812) 952-6014`}
						</Button>
					</Col>
					<Col md={3}>
						<p className='text-center lead'>Emergency</p>
						<Button variant='primary' href='tel:15027274823'>
							<FontAwesomeIcon icon={faMobile} className='mr-2' />
							{`(502) 727-4823`}
						</Button>
					</Col>
					<Col md={3}>
						<p className='text-center lead'>Email</p>
						<Button href='mailto:emergency_electric.com' variant='primary'>
							<FontAwesomeIcon icon={faEnvelope} className='mr-2' />
							{`Email Us`}
						</Button>
					</Col>
					<Col md={3}>
						<p className='text-center lead'>Location</p>
						<Button href='https://goo.gl/maps/UCz1D6Rs1Q6LNA4n6' variant='primary'>
							<FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' />
							{`Location`}
						</Button>
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col md={3} />
					<Col md={6}>
						<Image src={logo} fluid />
					</Col>
					<Col md={3} />
				</Row>

				<Row>
					<Col md={12} className=''>
						<p className='text-center'>
							<FontAwesomeIcon icon={faCopyright} />
							{` 2019 - All Rights Reserved`}
						</p>
						<p className='text-center'>Designed by</p>
						<Button size='sm' variant='outline-success' href='https://www.donwhitely.com'>
							Digital Solutions by Don
						</Button>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
