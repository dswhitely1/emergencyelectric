import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { educationFormChange } from '../../../actions';
class Education extends Component {
	handleSubmit = e => {
		const { schoolName, subject, graduate, degree } = this.props.educateMe;
		const { appId } = this.props.msgDisplay;
		const form = this.refs.formEmployment;
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
			<section className='ee-content-section'>
				<Container>
					<Form
						ref='formEducation'
						noValidate
						validated={null}
						onSubmit={e => this.handleSubmit(e)}>
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
								<Form.Control
									as='select'
									id='graduate'
									onChange={this.onInputChange}
									value={graduate}>
									<option>Yes</option>
									<option>No</option>
								</Form.Control>
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
							<Button
								type='button'
								variant='outline-success'
								className='ml-auto'
								onclick={this.handleSubmit}>
								Add Education
							</Button>
						</Form.Row>
						<Form.Row>
							<Button type='button' variant='outline-success'>
								Employment
							</Button>
							<Button
								type='button'
								variant='outline-success'
								className='ml-auto'>
								Next Section
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

export default connect(mapStateToProps, { educationFormChange })(Education);
