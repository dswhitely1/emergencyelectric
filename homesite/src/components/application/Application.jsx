import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import Introduction from './steps/Introduction';
import PersonalData1 from './steps/PersonalData1';
import Introduction2 from './steps/Introduction2';
import MessageDisplay from '../index/MessageDisplay'
class Application extends Component {
	render() {
		const { page } = this.props.appPageIndex;
		return (
			<div>
				{
					this.props.msgDisplay.messageDisplay ? <MessageDisplay /> :
					null}
				{
					page === 0 ? <Introduction /> :
					page === 1 ? <Introduction2 /> :
					<PersonalData1 />}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return { appPageIndex: state.applicationPage, msgDisplay:state.messageDisplay };
};

export default connect(mapStateToProps)(Application);
