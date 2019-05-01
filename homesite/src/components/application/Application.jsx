import React, { Component } from 'react';
import { connect } from 'react-redux';
import Introduction from './steps/Introduction';
import PersonalData1 from './steps/PersonalData1';
import Introduction2 from './steps/Introduction2';
import MessageDisplay from '../index/MessageDisplay';
import Employment from './steps/Employment';
import Education from './steps/Education';
import References from './steps/References';
import FinalPage from './steps/FinalPage';
import ThankYou from './steps/ThankYou';
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
					page === 2 ? <PersonalData1 /> :
					page === 3 ? <Employment /> :
					page === 4 ? <Education /> :
					page === 5 ? <References /> :
					page === 6 ? <FinalPage /> :
					<ThankYou />}
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

export default connect(mapStateToProps)(Application);
