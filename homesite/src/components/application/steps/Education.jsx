import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import {
	educationFormChange,
	educationFormValidation,
	sendEducationData,
	clearEducationForm,
	prevApplicationPage,
	nextApplicationPage,
	showMessageDisplay,
} from '../../../actions';

class Education extends Component {
	handleSubmit = e => {
		const { schoolname, subject, graduate, degree } = this.props.educateMe;
		const { appId } = this.props.msgDisplay;
		const form = this.refs.formEducation;
		const sendResponse = {
			parentid   : appId,
			schoolname : schoolname,
			subject    : subject,
			graduate   : graduate,
			degree     : degree,
		};
		e.preventDefault();
		e.stopPropagation();
		if (!form.checkValidity()) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.props.educationFormValidation(true);
		if (form.checkValidity()) {
			this.props.sendEducationData(sendResponse);
			this.props.clearEducationForm();
		}
	};
	onNextPageClick = () => {
		let num = this.props.appPageIndex.page + 1;
		this.props.prevApplicationPage(num);
	};
	onPrevPageClick = () => {
		let num = this.props.appPageIndex.page - 1;
		this.props.prevApplicationPage(num);
	};
	onInputChange = e => {
		if (this.props.msgDisplay.messageDisplay === true) {
			this.props.showMessageDisplay(false);
		}
		this.props.educationFormChange(e.target.id, e.target.value);
	};
	render() {
		const { schoolName, subject, graduate, degree } = this.props.educateMe;
		return (
			<section className='ee-content-section bg-light text-dark'>
				<Container>
					<Form ref='formEducation' noValidate validated={null} onSubmit={e => this.handleSubmit(e)}>
						<h3 className='mb-1'>Employment Application</h3>
						<h2 className='mb-2'>Education</h2>
						<Form.Group as={Row}>
							<Form.Label column md={5}>
								Name of School
							</Form.Label>
							<Col md={7}>
								<Form.Control
									type='text'
									id='schoolName'
									placeholder='Name of School'
									value={schoolName}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback>Required</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column md={5}>
								Major Subject
							</Form.Label>
							<Col md={7}>
								<Form.Control
									type='text'
									id='subject'
									placeholder='Major Subject'
									value={subject}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback>Required</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column md={5}>
								Did you Graduate
							</Form.Label>
							<Col md={7}>
								<Form.Control type='text' id='graduate' onChange={this.onInputChange} value={graduate} />
								<Form.Control.Feedback>Required</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column md={5}>
								Type of Degree or Diploma
							</Form.Label>
							<Col md={7}>
								<Form.Control
									onChange={this.onInputChange}
									type='text'
									id='degree'
									placeholder='Degree or Diploma'
									value={degree}
									required
								/>
								<Form.Control.Feedback>Required</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Row className='mb-2'>
							<p className='lead'>Click add Education to add more Education</p>
							<Button type='button' variant='outline-info' className='ml-auto' onClick={this.handleSubmit}>
								Add Education
							</Button>
						</Form.Row>
						<Form.Row>
							<Button type='button' variant='outline-info' onClick={this.onPrevPageClick}>
								Employment
							</Button>
							<Button onClick={this.onNextPageClick} type='button' variant='outline-info' className='ml-auto'>
								References
							</Button>
						</Form.Row>
					</Form>
				</Container>
			</section>
		);
	}
}
const mapStateToProps = state => {
	return {
		educateMe    : state.educationInfo,
		msgDisplay   : state.messageDisplay,
		appPageIndex : state.applicationPage,
	};
};

export default connect(mapStateToProps, {
	educationFormChange,
	educationFormValidation,
	sendEducationData,
	clearEducationForm,
	prevApplicationPage,
	nextApplicationPage,
	showMessageDisplay,
})(Education);
