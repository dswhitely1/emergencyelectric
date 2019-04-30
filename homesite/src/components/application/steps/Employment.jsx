import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import {
	showMessageDisplay,
	employmentInfoChange,
	applicationMessage,
	employmentFormValidation,
	sendEmploymentData,
	clearEmploymentForm,
	nextApplicationPage,
	prevApplicationPage,
} from '../../../actions';
class Employment extends Component {
	handleSubmit = e => {
		const {
			parentid,
			companyName,
			companyPhone,
			companyCitySt,
			companySupervisor,
			startDate,
			endDate,
			reasonLeaving,
			contactYes,
			contactNo,
		} = this.props.employInfo;
		const form = this.refs.formEmployment;
		e.preventDefault();
		e.stopPropagation();
		if (!form.checkValidity()) {
			e.preventDefault();
			e.stopPropagation();
		}

		if (!contactYes && !contactNo) {
			this.props.applicationMessage('May we contact your employer?');
			return;
		}
		this.props.employmentFormValidation(true);
		const sendResponse = {
			parentid          : this.props.msgDisplay.appId,
			companyName       : companyName,
			companyPhone      : companyPhone,
			companyCitySt     : companyCitySt,
			companySupervisor : companySupervisor,
			startDate         : startDate,
			endDate           : endDate,
			reasonLeaving     : reasonLeaving,
			contactYes        : contactYes,
			contactNo         : contactNo,
		};
		if (form.checkValidity()) {
			this.props.sendEmploymentData(sendResponse);
		}
		this.props.clearEmploymentForm();
	};
	onInputChange = e => {
		if (this.props.msgDisplay.messageDisplay === true) {
			this.props.showMessageDisplay(false);
		}
		this.props.employmentInfoChange(e.target.id, e.target.value);
	};
	onCheckChange = e => {
		if (this.props.msgDisplay.messageDisplay === true) {
			this.props.showMessageDisplay(false);
		}
		this.props.employmentInfoChange(e.target.id, e.target.value);
	};
	onNextPageClick = () => {
		let num = this.props.appPageIndex.page + 1;
		this.props.nexApplicationPage(num);
	};
	onPrevPageClick = () => {
		let num = this.props.appPageIndex.page - 1;
		this.props.prevApplicationPage(num);
	};

	render() {
		const {
			companyName,
			companyPhone,
			companyCitySt,
			companySupervisor,
			startDate,
			endDate,
			reasonLeaving,
			contactYes,
			contactNo,
		} = this.props.employInfo;
		return (
			<section className='ee-content-section'>
				<Container>
					<Form
						ref='formEmployment'
						noValidate
						validated={this.props.employInfo.formValidation}
						onSubmit={e => this.handleSubmit(e)}>
						<h3 className='mb-1'>Employment Application</h3>
						<h2 className='mb-2'>Employment Data</h2>
						<p className='lead'>
							Please provide at least the past 3 years of employment
						</p>
						<Form.Row>
							<Form.Group as={Col} md={8}>
								<Form.Control
									type='text'
									id='companyName'
									placeholder='Company Name'
									required
									value={companyName}
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									pattern='[0-9]{10}'
									id='companyPhone'
									placeholder='Phone Number'
									required
									value={companyPhone}
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md={6}>
								<Form.Control
									type='text'
									id='companyCitySt'
									placeholder='City and State'
									required
									value={companyCitySt}
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={6}>
								<Form.Control
									type='text'
									id='companySupervisor'
									placeholder='Supervisor Name'
									required
									value={companySupervisor}
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Group as={Row}>
							<Form.Label column md={3}>
								Date Started
							</Form.Label>
							<Col md={3}>
								<Form.Control
									type='date'
									id='startDate'
									required
									value={startDate}
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Col>
							<Form.Label column md={3}>
								Date Ended
							</Form.Label>
							<Col md={3}>
								<Form.Control
									type='date'
									id='endDate'
									required
									value={endDate}
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Col md={6}>
								<Form.Control
									type='text'
									placeholder='Reason For Leaving'
									id='reasonLeaving'
									required
									value={reasonLeaving}
									onChange={this.onInputChange}
								/>
							</Col>
							<Form.Label column md={3}>
								May we Contact
							</Form.Label>
							<Col md={3}>
								<Form.Check
									custom
									inline
									label='Yes'
									id='contactYes'
									checked={contactYes}
									onChange={this.onCheckChange}
								/>
								<Form.Check
									custom
									inline
									label='No'
									id='contactNo'
									checked={contactNo}
									onChange={this.onCheckChange}
								/>
							</Col>
						</Form.Group>
						<Form.Row className='mb-2'>
							<p className='lead'>
								Click Add Employment to add Previous Employers
							</p>
							<Button
								type='button'
								variant='outline-success'
								className='ml-auto'
								onClick={this.handleSubmit}>
								Add Employers
							</Button>
						</Form.Row>
						<Form.Row>
							<Button type='button' variant='outline-success'>
								Personal Data
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
		employInfo: state.employmentInfo,
		msgDisplay: state.messageDisplay,
		appPageIndex: state.applicationPage,
	};
};
export default connect(mapStateToProps, {
	showMessageDisplay,
	employmentInfoChange,
	applicationMessage,
	employmentFormValidation,
	clearEmploymentForm,
	sendEmploymentData,
	nextApplicationPage,
	prevApplicationPage,
})(Employment);
