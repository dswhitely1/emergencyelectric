import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../admin/Navigation';
import MainDisplay from './MainDisplay';
import { fetchMessages, deleteMessage } from '../../actions';
import Footer from './Footer';
class AdminHomePage extends Component {
	componentWillMount() {
		this.props.fetchMessages();
	}
	onHandleClick = (id, location) => {
		this.props.deleteMessage(id, location);
		this.props.fetchMessages();
	};
	render() {
		return (
			<div>
				<Navigation messages={this.props.msgs.messageCount} />
				<MainDisplay deleteMsgButton={this.onHandleClick} />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { msgs: state.messageList };
};

export default connect(mapStateToProps, { fetchMessages, deleteMessage })(AdminHomePage);
