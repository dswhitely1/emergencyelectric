import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Goals from './Goals';
import MessageDisplay from './MessageDisplay';
class Index extends Component {
	render() {
		return (
			<section>
				<About />
				<Services />
				<Testimonials />
				<Goals />
				<Contact />
				{
					this.props.msgDisplay.messageDisplay ? <MessageDisplay /> :
					null}
			</section>
		);
	}
}
const mapStateToProps = state => {
	return { msgDisplay: state.messageDisplay };
};
export default connect(mapStateToProps)(Index);
