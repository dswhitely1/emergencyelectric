import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap';

class SideBar extends Component {
	render() {
		return (
			<div className='bg-primary text-center'>
				<Button variant='secondary' size='sm' block>
					Messages{' '}
					<Badge pill variant='danger'>
						9
					</Badge>
				</Button>
				<br />
				<Button variant='secondary' size='sm' block>
					Applications{' '}
					<Badge pill variant='danger'>
						9
					</Badge>
				</Button>
			</div>
		);
	}
}

export default SideBar;
