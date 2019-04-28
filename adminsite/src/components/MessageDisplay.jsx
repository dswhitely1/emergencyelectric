import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';

const MessageDisplay = () => {
	return (
		<div>
			<Container fluid>
				<Table striped bordered hover>
					<thead className='thead-dark'>
						<tr className='text-center'>
							<th scope='col'>#</th>
							<th scope='col'>First Name</th>
							<th scope='col'>Last Name</th>
							<th scope='col'>Subject</th>
							<th scope='col'>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>Donald</td>
							<td>Whitely</td>
							<td>Test Subject</td>
							<Button variant='info'>Show Message</Button>
							<Button variant='primary'>Delete</Button>
						</tr>
						<tr>
							<th scope='row'>1</th>
							<td>Donald</td>
							<td>Whitely</td>
							<td>Test Subject</td>
							<Button variant='info'>Show Message</Button>
							<Button variant='primary'>Delete</Button>
						</tr>
						<tr>
							<th scope='row'>1</th>
							<td>Donald</td>
							<td>Whitely</td>
							<td>Test Subject</td>
							<Button variant='info'>Show Message</Button>
							<Button variant='primary'>Delete</Button>
						</tr>
					</tbody>
				</Table>
			</Container>
		</div>
	);
};

export default MessageDisplay;
