import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './index/Navigation';
import Header from './index/Header';

import Footer from './index/Footer';
import { showMessageDisplay } from '../actions';

import Index from './index/Index';

class HomePage extends Component {
	render() {
		return (
			<div id='page-top'>
				<Navigation />

				<Header />
				<Index />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { msgDisplay: state.messageDisplay };
};
export default connect(mapStateToProps, { showMessageDisplay })(HomePage);
