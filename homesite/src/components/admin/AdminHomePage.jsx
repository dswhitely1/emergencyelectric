import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../admin/Navigation';
import MainDisplay from './MainDisplay';
import { fetchMessages, deleteMessage } from '../../actions';
class AdminHomePage extends Component {
	componentWillMount() {
		this.props.fetchMessages();
	}
	onHandleClick = id => {
		console.log(`I was called with id:${id}`);
		this.props.deleteMessage(id);
		this.props.fetchMessages();
	};
	render() {
		return (
			<div>
				<Navigation />
				<MainDisplay deleteMsgButton={this.onHandleClick} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { msgs: state.messageList };
};

export default connect(mapStateToProps, { fetchMessages, deleteMessage })(AdminHomePage);
