import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MessageCard = props => {
	const { subject, firstName, lastName, message, email, createdat } = props.messages;
	const { deleteButton, value, location } = props;
	return (
		<Card className='mb-2'>
			<Card.Header>{subject}</Card.Header>
			<Card.Body>
				<Card.Title>{`${firstName} ${lastName}`}</Card.Title>
				<Card.Text>{message}</Card.Text>
				<Card.Text>
					{`Respond to `}
					<Button href={`mailto:${email}`} size='sm' variant='outline-info'>
						{email}
					</Button>
				</Card.Text>
			</Card.Body>
			<Card.Footer className='text-muted'>
				{Date(createdat)}
				<Button variant='danger' className='float-right' size='sm' onClick={() => deleteButton(value, location)}>
					Delete
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default MessageCard;
