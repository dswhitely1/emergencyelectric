import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayApplication from '../application/DisplayApplication';
import MessageList from './MessageList';
import ApplicationList from './ApplicationList';

class MainDisplay extends Component {
	render() {
		const { page } = this.props.admPage;
		return (
			<div>
				{
					page === '0' ? <MessageList deleteMsgButton={this.props.deleteMsgButton} /> :
					page === '1' ? <ApplicationList /> :
					page === '2' ? <DisplayApplication /> :
					null}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return { admPage: state.adminPage };
};
export default connect(mapStateToProps)(MainDisplay);
