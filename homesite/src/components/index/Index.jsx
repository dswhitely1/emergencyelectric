import React, { Component } from 'react';
import { connect } from 'react-redux';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Goals from './Goals';
import MessageDisplay from './MessageDisplay';
import Button from 'react-bootstrap/Button';
const baseUrl = process.env.PUBLIC_URL;
class Index extends Component {
	render() {
		return (
			<section>
				<Button className='apply-button' variant='outline-success' size='sm' href={`${baseUrl}/apply`}>
					<span>Now Hiring</span>
				</Button>
				<Button className='ee-24-hour-number' size='sm' variant='outline-secondary' href='tel:15027274823'>
					<span>{`(502) 727-4823`}</span>
				</Button>
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
