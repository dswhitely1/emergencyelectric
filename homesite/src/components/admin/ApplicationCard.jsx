import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const baseUrl = process.env.PUBLIC_URL;
const ApplicationCard = props => {
	console.log(props);
	const { id, firstName, lastName, phone } = props.apps;
	return (
		<Card key={id} className='md-col-3 mb-2 mr-auto text-center'>
			<Card.Header>{`${firstName} ${lastName}`}</Card.Header>
			<Card.Body>
				<Card.Text>{`Contact Phone Number ${phone}`}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Link to={`${baseUrl}/admin/viewapp`}>View Application</Link>
				<Button value={id} variant='success' size='sm' className='float-right' href={`${baseUrl}/admin/viewapp`}>
					View Application
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default ApplicationCard;
