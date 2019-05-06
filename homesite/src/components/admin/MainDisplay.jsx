import React, { Component } from 'react';
import DisplayApplication from '../application/DisplayApplication';
import MessageList from './MessageList';
import ApplicationList from './ApplicationList';

class MainDisplay extends Component {
	render() {
		return (
			<div className='main-admin'>
				<MessageList deleteMsgButton={this.props.deleteMsgButton} />
				<ApplicationList />
			</div>
		);
	}
}

export default MainDisplay;
