import React, { Component } from 'react';
import { connect } from 'react-redux';
import Introduction from './steps/Introduction';
import PersonalData from '../application/steps-reduxform/PersonalData';
import Introduction2 from './steps/Introduction2';
import MessageDisplay from '../index/MessageDisplay';
import Employment from './steps-reduxform/Employment';
import Education from './steps-reduxform/Education';
import References from './steps-reduxform/References';
import FinalPage from './steps/FinalPage';
import ThankYou from './steps/ThankYou';
import { sendPersonalDataDB1, nextApplicationPage } from '../../actions';
class Application extends Component {
	onPersonalDataSubmit = values => {
		this.props.sendPersonalDataDB1(values);
		if (this.props.msgDisplay.variant !== 'Danger') {
			this.props.nextApplicationPage(3);
		}
	};
	onEmploymentDataSubmit = values => {
		const employmentData = { parentid: this.props.msgDisplay.appId, ...values };
		console.log(employmentData);
	};

	render() {
		const { page } = this.props.appPageIndex;
		return (
			<div>
				{this.props.msgDisplay.messageDisplay ? <MessageDisplay /> : null}
				{page === 0 ? (
					<Introduction />
				) : page === 1 ? (
					<Introduction2 />
				) : page === 2 ? (
					<PersonalData onSubmit={this.onPersonalDataSubmit} />
				) : page === 3 ? (
					<Employment onSubmit={this.onEmploymentDataSubmit} />
				) : page === 4 ? (
					<Education onSubmit={this.onEmploymentDataSubmit} />
				) : page === 5 ? (
					<References onSubmit={this.onEmploymentDataSubmit} />
				) : page === 6 ? (
					<FinalPage />
				) : (
					<ThankYou />
				)}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		appPageIndex : state.applicationPage,
		msgDisplay   : state.messageDisplay,
	};
};

export default connect(mapStateToProps, { sendPersonalDataDB1, nextApplicationPage })(Application);
