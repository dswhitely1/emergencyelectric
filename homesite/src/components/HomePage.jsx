import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './index/Navigation';
import Header from './index/Header';
import About from './index/About';
import Services from './index/Services';
import Testimonials from './index/Testimonials';
import Contact from './index/Contact';
import Goals from './index/Goals';
import MessageDisplay from './index/MessageDisplay';
import Footer from './index/Footer';
import { showMessageDisplay } from '../actions';
import '../emergency_electric.min.css';
class HomePage extends Component {
	render() {
		return (
			<div id='page-top'>
				<Navigation />
				<Header />
				<About />
				<Services />
				<Testimonials />
				<Goals />
				<Contact />
				{
					this.props.msgDisplay.messageDisplay ? <MessageDisplay /> :
					null}
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { msgDisplay: state.messageDisplay };
};
export default connect(mapStateToProps, { showMessageDisplay })(HomePage);
