import React, { Component } from 'react';
import DisplayApplication from '../application/DisplayApplication';
import MessageList from './MessageList';
class MainDisplay extends Component {
	render() {
		return <MessageList deleteMsgButton={this.props.deleteMsgButton} />;
	}
}

export default MainDisplay;
