import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Col, Container } from 'react-bootstrap';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const phoneNumber = value =>
	value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;

const eitherYesNo = [ 'Yes', 'No' ];

const renderSelector = ({ label, options, fieldSize, input, meta: { touched, error } }) => (
	<Form.Group as={Col} md={fieldSize}>
		<select {...input} className='form-control'>
			<option value=''>{label}</option>
			{options.map(val => (
				<option value={val} key={val}>
					{val}
				</option>
			))}
		</select>
		{touched && error && <span className='text-danger small'>{error}</span>}
	</Form.Group>
);

const renderField = ({ fieldSize, input, label, type, meta: { touched, error, warning } }) => (
	<Form.Group as={Col} md={fieldSize}>
		<input {...input} placeholder={label} type={type} className='form-control' />
		{touched &&
			((error && <span className='text-danger small'>{error}</span>) ||
				(warning && <span className='text-danger small'>{warning}</span>))}
	</Form.Group>
);

const Employment = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<section className='ee-content-section bg-light text-dark'>
			<Container>
				<form onSubmit={handleSubmit}>
					<h3 className='mb-1'>Employment Application</h3>
					<h2 className='mb-2'>Personal Data</h2>
					<Form.Row>
						<Field
							label='Company Name'
							name='companyname'
							type='text'
							fieldSize='8'
							validate={[ required ]}
							component={renderField}
						/>
						<Field
							label='Company Phone'
							name='companyphone'
							type='text'
							fieldSize='4'
							validate={[ required ]}
							component={renderField}
						/>
					</Form.Row>
					<Form.Row>
						<Field
							label='City and State'
							name='companycityst'
							type='text'
							fieldSize='6'
							validate={[ required ]}
							component={renderField}
						/>
						<Field
							label='Supervisor'
							name='companysupervisor'
							type='text'
							fieldSize='6'
							validate={[ required ]}
							component={renderField}
						/>
					</Form.Row>
					<Form.Row>
						<Col md={3}>
							<Form.Label className='float-right'>Date Started</Form.Label>
						</Col>
						<Field
							name='startdate'
							type='date'
							label='Start Date'
							fieldSize='3'
							component={renderField}
							validate={[ required ]}
						/>
						<Col md={3}>
							<Form.Label className='float-right'>Date Ended</Form.Label>
						</Col>
						<Field
							name='enddate'
							type='date'
							label='End Date'
							fieldSize='3'
							component={renderField}
							validate={[ required ]}
						/>
					</Form.Row>
					<Form.Row>
						<Field
							name='reasonleaving'
							type='text'
							label='Reason for Leaving'
							fieldSize='6'
							component={renderField}
							validate={[ required ]}
						/>
						<Field
							name='contact'
							fieldSize='6'
							label='May We Contact'
							options={eitherYesNo}
							validate={[ required ]}
							component={renderSelector}
						/>
					</Form.Row>
					<button className='btn btn-outline-info mr-2' type='submit' disabled={pristine || submitting}>
						Submit
					</button>
					<button className='btn btn-outline-info' type='button' disabled={pristine || submitting} onClick={reset}>
						Clear Values
					</button>
				</form>
			</Container>
		</section>
	);
};

export default reduxForm({ form: 'employment' })(Employment);
