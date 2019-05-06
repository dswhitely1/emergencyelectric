import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageCard from './MessageCard';
import { Card, Button, Nav } from 'react-bootstrap';
class MessageList extends Component {
	onButtonClick = e => {
		this.props.deleteMsgButton(e.target.value);
	};
	renderMessages(theMessages) {
		if (theMessages !== undefined) {
			const renderMessageCards = this.props.msgList.messages.map((msgs, i) => {
				return <MessageCard deleteButton={this.props.deleteMsgButton} messages={msgs} key={i} value={msgs.id} />;
			});
			return renderMessageCards;
		} else {
			return null;
		}
	}
	render() {
		console.log(this.props);
		const { messages } = this.props.msgList;
		return (
			<div className='col-md-10 m-auto bg-light application'>
				<h2 className='text-center'>Messages</h2>
				{this.renderMessages(messages)}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return { msgList: state.messageList };
};
export default connect(mapStateToProps)(MessageList);
