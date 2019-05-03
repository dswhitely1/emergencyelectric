import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import {
	referenceFormChange,
	referenceFormValidation,
	sendReferenceData,
	clearReferenceForm,
	prevApplicationPage,
	nextApplicationPage,
	showMessageDisplay,
} from '../../../actions';

class References extends Component {
	handleSubmit = e => {
		const { name, relationship, years, phone } = this.props.refData;
		const { appId } = this.props.msgDisplay;
		const form = this.refs.formReferences;
		const sendResponse = { parentid: appId, name, relationship, years, phone };
		e.preventDefault();
		e.stopPropagation();
		if (!form.checkValidity()) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.props.referenceFormValidation(true);
		if (form.checkValidity()) {
			this.props.sendReferenceData(sendResponse);
			this.props.clearReferenceForm();
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
		this.props.referenceFormChange(e.target.id, e.target.value);
	};
	render() {
		const {
			formValidation,
			name,
			relationship,
			years,
			phone,
		} = this.props.refData;
		return (
			<section className='ee-content-section bg-light text-dark'>
				<Container>
					<Form
						ref='formReferences'
						noValidate
						validated={formValidation}
						onSubmit={e => this.handleSubmit(e)}>
						<h3 className='mb-1'>Employment Application</h3>
						<h2 className='mb-2'>References</h2>
						<Form.Group as={Row}>
							<Form.Label column md={4}>
								Name
							</Form.Label>
							<Col md={8}>
								<Form.Control
									type='text'
									id='name'
									placeholder='Reference Name'
									value={name}
									onChange={this.onInputChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column md={4}>
								Relatonship
							</Form.Label>
							<Col md={8}>
								<Form.Control
									type='text'
									id='relationship'
									placeholder='Relationship'
									value={relationship}
									required
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column md={4}>
								Years Known
							</Form.Label>
							<Col md={8}>
								<Form.Control
									type='text'
									id='years'
									placeholder='Years Known'
									pattern='[0-9]{1,}'
									value={years}
									required
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Required
								</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column md={4}>
								Phone Number
							</Form.Label>
							<Col md={8}>
								<Form.Control
									type='text'
									id='phone'
									placeholder='Phone Number'
									value={phone}
									pattern='[0-9]{10}'
									required
									onChange={this.onInputChange}
								/>
								<Form.Control.Feedback type='invalid'>
									Please provide a valid 10 digit phone number
								</Form.Control.Feedback>
							</Col>
						</Form.Group>
						<Form.Row className='mb-2'>
							<p>`Click 'Add References' to Add References</p>
							<Button
								type='button'
								variant='outline-info'
								className='ml-auto'
								onClick={this.handleSubmit}>
								Add References
							</Button>
						</Form.Row>
						<Form.Row>
							<Button
								type='button'
								variant='outline-info'
								onClick={this.onPrevPageClick}>
								Education
							</Button>
							<Button
								onClick={this.onNextPageClick}
								type='button'
								variant='outline-info'
								className='ml-auto'>
								Submit Application
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
		refData      : state.references,
		msgDisplay   : state.messageDisplay,
		appPageIndex : state.applicationPage,
	};
};

export default connect(mapStateToProps, {
	referenceFormChange,
	referenceFormValidation,
	sendReferenceData,
	clearReferenceForm,
	prevApplicationPage,
	nextApplicationPage,
	showMessageDisplay,
})(References);
