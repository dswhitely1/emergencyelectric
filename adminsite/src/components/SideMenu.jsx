import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
const SideMenu = () => {
	return (
		<ButtonGroup vertical={true}>
			<Button variant='info' className='mb-1'>
				Messages
			</Button>
			<Button variant='info' className='mb-1'>
				Applications
			</Button>
			<Button variant='info'>Logout</Button>
		</ButtonGroup>
	);
};

export default SideMenu;
