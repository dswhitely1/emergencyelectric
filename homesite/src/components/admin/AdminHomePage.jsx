import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../admin/Navigation';
import MainDisplay from './MainDisplay';
import { fetchMessages, deleteMessage, fetchApplications } from '../../actions';
import Footer from './Footer';
class AdminHomePage extends Component {
	componentWillMount() {
		this.props.fetchMessages();
		this.props.fetchApplications();
	}

	onHandleClick = (id, location) => {
		this.props.deleteMessage(id, location);
		this.props.fetchMessages();
	};
	render() {
		return (
			<div>
				<Navigation messages={this.props.msg.messageCount} applications={this.props.apps.appCount} />
				<MainDisplay deleteMsgButton={this.onHandleClick} />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { msg: state.messageList, apps: state.applicationList };
};

export default connect(mapStateToProps, { fetchMessages, deleteMessage, fetchApplications })(AdminHomePage);
