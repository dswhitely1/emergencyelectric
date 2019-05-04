import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './index/Navigation';
import Header from './index/Header';

import Footer from './index/Footer';
import { showMessageDisplay } from '../actions';
import { Col } from 'react-bootstrap';

import Index from './index/Index';
import TableCreation from './admin/TableCreation';
import R from '../js/constants';
class HomePage extends Component {
	render() {
		const dataSent = [ 'South Oldham High School', 'Computer Science', 'Yes', 'High School Diploma' ];
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
