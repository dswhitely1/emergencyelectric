import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import {
	formValidation,
	resetContactForm,
	valueContactFormChange,
	sendMessage,
	showMessageDisplay,
	updateMessageDisplay,
	updateFormButton,
} from '../../actions';

class Contact extends Component {
	handleSubmit(e) {
		this.props.updateFormButton(true);
		const form = e.currentTarget;
		e.preventDefault();
		e.stopPropagation();
		if (!form.checkValidity()) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.props.formValidation(true);
		const values = {
			firstName   : this.props.messageForm.firstName,
			lastName    : this.props.messageForm.lastName,
			email       : this.props.messageForm.email,
			subject     : this.props.messageForm.subject,
			message     : this.props.messageForm.message,
			createdAt   : new Date().toString(),
			readMessage : false,
		};

		if (form.checkValidity()) {
			this.props.sendMessage(values);
			this.props.resetContactForm();
		}
	}
	handleClearForm = () => {
		this.props.resetContactForm();
	};
	handleFirstNameChange = e => {
		this.props.valueContactFormChange('firstName', e.target.value);
		this.props.showMessageDisplay(false);
	};

	handleLastNameChange = e => {
		this.props.valueContactFormChange('lastName', e.target.value);
		this.props.showMessageDisplay(false);
	};

	handleEmailChange = e => {
		this.props.valueContactFormChange('email', e.target.value);
		this.props.showMessageDisplay(false);
	};
	handleSubjectChange = e => {
		this.props.valueContactFormChange('subject', e.target.value);
		this.props.showMessageDisplay(false);
	};
	handleMessageChange = e => {
		this.props.valueContactFormChange('message', e.target.value);
		this.props.showMessageDisplay(false);
	};
	render() {
		const {
			validated,
			firstName,
			lastName,
			email,
			subject,
			message,
		} = this.props.messageForm;
		return (
			<section className='ee-content-section bg-light' id='contact'>
				<Container>
					<h3 className='mb-1 text-center'>Contact Us</h3>
					<h2 className='mb-5 text-center'>Send Us a Message!</h2>
					<Form
						noValidate
						validated={validated}
						onSubmit={e => this.handleSubmit(e)}>
						<Form.Group controlId='formContact'>
							<Row className='mb-2'>
								<Col md={6} className='mb-sm-2 mb-md-0'>
									<Form.Control
										required
										value={firstName}
										type='text'
										placeholder='First Name'
										onChange={this.handleFirstNameChange}
									/>
									<Form.Control.Feedback type='invalid'>
										Required
									</Form.Control.Feedback>
								</Col>
								<Col md={6}>
									<Form.Control
										required
										value={lastName}
										type='text'
										placeholder='Last Name'
										onChange={this.handleLastNameChange}
									/>
									<Form.Control.Feedback type='invalid'>
										Required
									</Form.Control.Feedback>
								</Col>
							</Row>
							<Form.Control
								required
								className='mb-2'
								type='email'
								value={email}
								placeholder='Email Address'
								onChange={this.handleEmailChange}
							/>
							<Form.Control.Feedback type='invalid'>
								Please provide a valid email address
							</Form.Control.Feedback>
							<Form.Control
								required
								value={subject}
								type='text'
								className='mb-2'
								placeholder='Subject'
								onChange={this.handleSubjectChange}
							/>
							<Form.Control.Feedback type='invalid'>
								Required
							</Form.Control.Feedback>
							<Form.Control
								as='textarea'
								className='mb-2'
								rows={4}
								placeholder='Enter Message Here'
								required
								value={message}
								onChange={this.handleMessageChange}
							/>
						</Form.Group>
						<Button type='submit' variant='danger' className='mr-2' size='lg'>
							{
								this.props.messageAlert.isSending ? `Sending` :
								`Send Message`}
						</Button>
						<Button
							type='button'
							variant='outline-danger'
							size='lg'
							onClick={this.handleClearForm}>
							Clear Form
						</Button>

						<Scrollchor
							to='#page-top'
							className='btn btn-danger btn-lg float-right'>
							<FontAwesomeIcon icon={faAngleDoubleUp} />
						</Scrollchor>
					</Form>
				</Container>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { messageForm: state.formContact, messageAlert: state.messageDisplay };
};

export default connect(mapStateToProps, {
	formValidation,
	resetContactForm,
	valueContactFormChange,
	sendMessage,
	showMessageDisplay,
	updateMessageDisplay,
	updateFormButton,
})(Contact);
