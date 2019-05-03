import React from 'react';
import { Button } from 'react-bootstrap';

const ThankYou = () => {
	return (
		<section className='ee-content-section bg-light text-dark'>
			<h2>
				Thank you for applying with <br />
				<strong className='font-weight-bold text-uppercase'>
					Emergency Electric, Inc
				</strong>
			</h2>
			<p className='lead text-justify'>
				We have received your application and we are currently reviewing it. We
				will keep your application on file for 90 days. If you would like to
				inquire about your application, please give us a call between the hours
				of 8:00 AM and 12:00 PM Monday - Friday at (812) 952-6014.
			</p>
			<Button href='/' variant='outline-info'>
				Back to the Home Page
			</Button>
		</section>
	);
};

export default ThankYou;
