import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextApplicationPage, prevApplicationPage, applicationMessage } from '../../../actions';
import { Form, Col, Container, Button } from 'react-bootstrap';
import {
	formPersonalData,
	formPersonalData2,
	schedule,
	shift,
	auth,
	over,
	permit,
} from '../../../js/personalData1';
class PersonalData1 extends Component {
	onHandleCheckBox = e => {
		if (e.currentTarget.id === 'authNo') {
			this.refs.authYes.checked = false;
		} else if (e.currentTarget.id === 'authYes') {
			this.refs.authNo.checked = false;
		} else if (e.currentTarget.id === 'overYes') {
			this.refs.overNo.checked = false;
			this.refs.permitNo.disabled = false;
			this.refs.permitYes.disabled = false;
		} else if (e.currentTarget.id === 'overNo') {
			this.refs.overYes.checked = false;
			this.refs.permitNo.checked = false;
			this.refs.permitYes.checked = false;
			this.refs.permitNo.disabled = true;
			this.refs.permitYes.disabled = true;
		} else if (e.currentTarget.id === 'permitYes') {
			this.refs.permitNo.checked = false;
		} else if (e.currentTarget.id === 'permitNo') {
			this.refs.permitYes.checked = false;
		}
		this.refs.continue.disabled = !this.formValidation();
	};
	onPrevPageClick = () => {
		let num = this.props.appPageIndex.page - 1;
		this.props.prevApplicationPage(num);
	};
	formValidation = () => {
		const {
			firstName,
			lastName,
			address,
			city,
			state,
			zipcode,
			phoneNumber,
			emailAddress,
			desiredPay,
			whenAreYouAbleToStartWork,
			positionDesired,
			scheduleFullTime,
			schedulePartTime,
			scheduleTemporary,
			shiftWeekdays,
			shiftWeekends,
			shiftEvenings,
			shiftNights,
			authYes,
			authNo,
			overYes,
			overNo,
			permitYes,
			permitNo,
		} = this.refs;
		if (firstName.value === '') {
			this.props.applicationMessage(`The first name field is required`);
			return false;
		} else if (lastName.value === '') {
			return false;
		} else if (address.value === '') {
			return false;
		} else if (city.value === '') {
			return false;
		} else if (state.value === '') {
			return false;
		} else if (zipcode.value === '') {
			return false;
		} else if (phoneNumber.value === '') {
			return false;
		} else if (emailAddress.value === '') {
			return false;
		} else if (desiredPay.value === '') {
			return false;
		} else if (whenAreYouAbleToStartWork.value === '') {
			return false;
		} else if (positionDesired.value === '') {
			return false;
		} else if (
			!scheduleFullTime.checked &&
			!schedulePartTime.checked &&
			!scheduleTemporary.checked
		) {
			return false;
		} else if (
			!shiftWeekdays.checked &&
			!shiftWeekends.checked &&
			!shiftEvenings.checked &&
			!shiftNights.checked
		) {
			return false;
		} else if (!authYes.checked && !authNo.checked) {
			return false;
		} else if (!overYes.checked && !overNo.checked) {
			return false;
		} else if (overYes.checked) {
			if (!permitYes.checked && !permitNo.checked) {
				return false;
			}
		}
		return true;
	};
	onInputChange = e => {
		this.refs.continue.disabled = !this.formValidation();
	};
	onNextPageClick = () => {
		// Let's do some required checkingfirstName
		console.log(this.formValidation());
	};
	renderFormRows(value, index) {
		const renderFormList = value.map((obj, i) => {
			console.log(obj.toCamelCase());
			if (obj.require) {
				return (
					<Form.Group
						as={Col}
						md={`${obj.width}`}
						key={`${obj.toCamelCase()}-row-${index}-col-${i}`}>
						<Form.Control
							type={`${obj.type}`}
							id={`${obj.toCamelCase()}${index}`}
							ref={`${obj.toCamelCase()}`}
							required
							placeholder={`${obj.name}*`}
							onChange={this.onInputChange}
						/>
					</Form.Group>
				);
			} else {
				return (
					<Form.Group
						as={Col}
						md={`${obj.width}`}
						key={`${obj.toCamelCase()}-row-${index}-col-${i}`}>
						<Form.Control
							type={`${obj.type}`}
							id={`${obj.toCamelCase()}${index}`}
							placeholder={`${obj.name}`}
							ref={`${obj.toCamelCase()}`}
							onChange={this.onInputChange}
						/>
					</Form.Group>
				);
			}
		});
		return renderFormList;
	}
	renderCheckList(value, index) {
		const renderedCheckList = value.map((obj, i) => {
			console.log(obj.toCamelCase());
			return (
				<Form.Check
					custom
					inline
					label={`${obj.label}`}
					id={`${obj.toCamelCase()}`}
					key={`${obj.toCamelCase()}-${i}`}
					ref={`${obj.toCamelCase()}`}
					onChange={this.onHandleCheckBox}
				/>
			);
		});
		return renderedCheckList;
	}
	render() {
		return (
			<section className='ee-content-section'>
				<Container>
					<Form>
						<h3 className='mb-1'>Employment Application</h3>
						<h2 className='mb-2'>Personal Data</h2>
						{formPersonalData.map((rows, i) => (
							<Form.Row key={`personaldata1-${i}`}>
								{this.renderFormRows(rows, i)}
							</Form.Row>
						))}
						<Form.Row className='mb-3'>
							<Col md={6}>
								<p>Are you interested in?</p>
								{this.renderCheckList(schedule)}
							</Col>
							<Col md={6}>
								<p>What Schedule would you prefer?</p>
								{this.renderCheckList(shift)}
							</Col>
						</Form.Row>
						{formPersonalData2.map((rows, i) => (
							<Form.Row key={`personaldata2-${i}`}>
								{this.renderFormRows(rows, i)}
							</Form.Row>
						))}
						<Form.Row className='mb-3'>
							<Col md={4}>
								<p>Are you authorized to work in the United States?</p>
								{this.renderCheckList(auth)}
							</Col>
							<Col md={4}>
								<p>Are you under 18 years of age?</p>
								{this.renderCheckList(over)}
							</Col>
							<Col md={4}>
								<p>If so, can you furnish a work permit?</p>
								{this.renderCheckList(permit)}
							</Col>
						</Form.Row>
					</Form>
					<Button
						variant='outline-success'
						className='float-right'
						onClick={this.onNextPageClick}
						disabled
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
	return { appPageIndex: state.applicationPage };
};

export default connect(mapStateToProps, {
	nextApplicationPage,
	prevApplicationPage, applicationMessage
})(PersonalData1);
