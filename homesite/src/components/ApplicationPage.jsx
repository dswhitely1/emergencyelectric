import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './application/Navigation';

import Footer from './index/Footer';
import { showMessageDisplay } from '../actions';
import '../emergency_electric.min.css';
import MainPage from './application/MainPage';
import BottomNavigation from './application/BottomNavigation';
class ApplicationPage extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<MainPage />
				<BottomNavigation />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { msgDisplay: state.messageDisplay };
};
export default connect(mapStateToProps, { showMessageDisplay })(
	ApplicationPage,
);
