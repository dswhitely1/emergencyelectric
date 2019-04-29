import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	nextApplicationPage,
	prevApplicationPage,
	applicationMessage,
	showMessageDisplay,
} from '../../../actions';
import { Form, Col, Container, Button } from 'react-bootstrap';

class PersonalData1 extends Component {
	onHandleCheckBox = e => {
		// this.refs.continue.disabled = !this.formValidation();
	};
	onPrevPageClick = () => {
		let num = this.props.appPageIndex.page - 1;
		this.props.prevApplicationPage(num);
	};

	onInputChange = e => {
		this.props.showMessageDisplay(false);
	};
	onNextPageClick = () => {
		// Let's do some required checkingfirstName

		const emailRegEx = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
		const zipCodeRegEx = RegExp(/^\d{5}(?:-\d{4})?$/g);
	};

	render() {
		const {
			firstName,
			middleName,
			lastName,
			preferredName,
			address,
			apartment,
			city,
			state,
			zipcode,
			phoneNumber,
			alternatePhoneNumber,
			emailAddress,
			scheduleFullTime,
			schedulePartTime,
			scheduleTemporary,
			shiftWeekdays,
			shiftWeekends,
			shiftEvenings,
			shiftNights,
			howDidYouHearAboutUs,
			desiredPay,
			whenAreYouAbleToStartWork,
			positionDesired,
			authYes,
			authNo,
			overYes,
			overNo,
			permitYes,
			permitNo,
		} = this.props.persData;
		return (
			<section className='ee-content-section'>
				<Container>
					<Form>
						<h3 className='mb-1'>Employment Application</h3>
						<h2 className='mb-2'>Personal Data</h2>
						<Form.Row>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									id='firstName'
									placeholder='First Name'
									value={firstName}
									required
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={2}>
								<Form.Control
									type='text'
									id='middleName'
									placeholder='Middle Name'
									value={middleName}
									onChange={this.onInputChange}
								/>
							</Form.Group>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									id='lastName'
									placeholder='Last Name'
									value={lastName}
									required
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={2}>
								<Form.Control
									type='text'
									id='preferredName'
									placeholder='Preferred Name'
									value={preferredName}
									onChange={this.onInputChange}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md={6}>
								<Form.Control
									type='text'
									id='address'
									placeholder='Address'
									value={address}
									required
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={6}>
								<Form.Control
									type='text'
									id='apartment'
									placeholder='Apartment'
									value={apartment}
									onChange={this.onInputChange}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									id='city'
									placeholder='City'
									value={city}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									id='State'
									placeholder='State'
									value={state}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									id='zipCode'
									placeholder='Zip Code'
									value={zipcode}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									id='phoneNumber'
									placeholder='Phone Number'
									value={phoneNumber}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='text'
									id='alternatePhoneNumber'
									placeholder='Alt Phone Number'
									value={alternatePhoneNumber}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={4}>
								<Form.Control
									type='email'
									id='emailAddress'
									placeholder='E-mail Address'
									value={emailAddress}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Invalid Email Address
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Row className='mb-3'>
							<Col md={6}>
								<p>Are you interested in?</p>
								<Form.Check
									custom
									inline
									label='Full Time'
									id='scheduleFullTime'
									checked={scheduleFullTime}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='Part Time'
									id='schedulePartTime'
									checked={schedulePartTime}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='Temporary'
									id='scheduleTemporary'
									checked={scheduleTemporary}
									onChange={this.onHandleCheckBox}
								/>
							</Col>
							<Col md={6}>
								<p>What Schedule would you prefer?</p>
								<Form.Check
									custom
									inline
									label='Weekdays'
									id='shiftWeekdays'
									checked={shiftWeekdays}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='Weekends'
									id='scheduleTemporary'
									checked={shiftWeekends}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='Evenings'
									id='shiftEvenings'
									checked={shiftEvenings}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='Nights'
									id='shiftNights'
									checked={shiftNights}
									onChange={this.onHandleCheckBox}
								/>
							</Col>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md={6}>
								<Form.Control
									type='text'
									id='howDidYouHearAboutUs'
									placeholder='Referred by'
									value={howDidYouHearAboutUs}
									onChange={this.onInputChange}
								/>
							</Form.Group>
							<Form.Group as={Col} md={6}>
								<Form.Control
									type='text'
									id='desiredPay'
									placeholder='Desired Pay'
									required
									value={desiredPay}
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
									type='date'
									id='whenAreYouAbleToStartWork'
									placeholder='Date Available To Start'
									value={whenAreYouAbleToStartWork}
									required
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md={6}>
								<Form.Control
									type='text'
									id='positionDesired'
									placeholder='Position Applying For'
									value={positionDesired}
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Row className='mb-3'>
							<Col md={4}>
								<p>Are you authorized to work in the United States?</p>
								<Form.Check
									custom
									inline
									label='Yes'
									id='authYes'
									checked={authYes}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='No'
									id='authNo'
									checked={authNo}
									onChange={this.onHandleCheckBox}
								/>
							</Col>
							<Col md={4}>
								<p>Are you under 18 years of age?</p>
								<Form.Check
									custom
									inline
									label='Yes'
									id='overYes'
									checked={overYes}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='No'
									id='overNo'
									checked={overNo}
									onChange={this.onHandleCheckBox}
								/>
							</Col>
							<Col md={4}>
								<p>If so, can you furnish a work permit?</p>
								<Form.Check
									custom
									inline
									label='Yes'
									id='permitYes'
									checked={permitYes}
									onChange={this.onHandleCheckBox}
								/>
								<Form.Check
									custom
									inline
									label='No'
									id='permitNo'
									checked={permitNo}
									onChange={this.onHandleCheckBox}
								/>
							</Col>
						</Form.Row>
						<Button variant='info' type='submit'>
							Submit
						</Button>
					</Form>
					<Button
						variant='outline-success'
						className='float-right'
						onClick={this.onNextPageClick}
						ref={`continue`}>
						Continue
					</Button>
					<Button
						variant='outline-success'
						className='float-left'
						onClick={this.onPrevPageClick}>
						Previous
					</Button>
				</Container>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		appPageIndex : state.applicationPage,
		msgDisplay   : state.messageDisplay,
		persData     : state.personalData,
	};
};

export default connect(mapStateToProps, {
	nextApplicationPage,
	prevApplicationPage,
	applicationMessage,
	showMessageDisplay,
})(PersonalData1);
