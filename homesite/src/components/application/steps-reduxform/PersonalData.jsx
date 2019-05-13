import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Form, Col } from 'react-bootstrap';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const phoneNumber = value =>
	value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;
const zipcode = value => (value && !/[0-9]{5}(?:-[0-9]{4})?$/i.test(value) ? 'Enter a valid ZipCode' : undefined);
const states = [
	'AK',
	'AL',
	'AR',
	'AS',
	'AZ',
	'CA',
	'CO',
	'CT',
	'DC',
	'DE',
	'FL',
	'GA',
	'GU',
	'HI',
	'IA',
	'ID',
	'IL',
	'IN',
	'KS',
	'KY',
	'LA',
	'MA',
	'MD',
	'ME',
	'MI',
	'MN',
	'MO',
	'MS',
	'MT',
	'NC',
	'ND',
	'NE',
	'NH',
	'NJ',
	'NM',
	'NV',
	'NY',
	'OH',
	'OK',
	'OR',
	'PA',
	'PR',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VA',
	'VI',
	'VT',
	'WA',
	'WI',
	'WV',
	'WY',
];
const scheduleOptions = [ { id: 1, name: 'Full Time' }, { id: 2, name: 'Part Time' }, { id: 3, name: 'Temporary' } ];
const hoursOptions = [
	{ id: 1, name: 'Weekdays' },
	{ id: 2, name: 'Weekends' },
	{ id: 3, name: 'Evenings' },
	{ id: 4, name: 'Nights' },
];

const eitherYesNo = [ 'Yes', 'No' ];
const eitherYesNoNa = [ ...eitherYesNo, 'Not Applicable' ];
const checkboxGroup = ({ fieldSize, label, options, input, meta: { touched, error } }) => (
	<Form.Group as={Col} md={fieldSize}>
		<p>{label}</p>
		{options.map((option, index) => (
			<Form.Check
				inline
				label={option.name}
				key={index}
				type='checkbox'
				value={option.name}
				checked={input.value.indexOf(option.name) !== -1}
				onChange={event => {
					const newValue = [ ...input.value ];
					event.target.checked ? newValue.push(option.name) : newValue.splice(newValue.indexOf(option.name), 1);
					return input.onChange(newValue);
				}}
			/>
		))}
		{touched && error && <p className='text-danger small'>{error}</p>}
	</Form.Group>
);

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

const PersonalData = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<section className='ee-content-section bg-light text-dark text-center'>
			<Container>
				<form onSubmit={handleSubmit}>
					<h3 className='mb-1'>Employment Application</h3>
					<h2 className='mb-2'>Personal Data</h2>
					<Form.Row>
						<Field
							fieldSize='4'
							name='firstName'
							type='text'
							label='First Name'
							validate={[ required ]}
							component={renderField}
						/>
						<Field fieldSize='2' name='middleName' type='text' label='Middle Name' component={renderField} />
						<Field
							fieldSize='4'
							name='lastName'
							type='text'
							label='Last Name'
							validate={[ required ]}
							component={renderField}
						/>
						<Field fieldSize='2' name='prefName' type='text' label='Preferred Name' component={renderField} />
					</Form.Row>
					<Form.Row>
						<Field
							fieldSize='6'
							name='address'
							type='text'
							label='Address'
							validate={[ required ]}
							component={renderField}
						/>
						<Field fieldSize='6' name='address2' type='text' label='Apartment' component={renderField} />
					</Form.Row>
					<Form.Row>
						<Field fieldSize='4' name='city' type='text' label='City' validate={[ required ]} component={renderField} />
						<Field
							fieldSize='4'
							options={states}
							name='state'
							type='text'
							label='State'
							validate={[ required ]}
							component={renderSelector}
						/>

						<Field
							fieldSize='4'
							name='zipcode'
							type='number'
							label='ZipCode'
							validate={[ required, zipcode ]}
							component={renderField}
						/>
					</Form.Row>
					<Form.Row>
						<Field
							fieldSize='4'
							name='phone'
							type='number'
							label='Phone Number'
							validate={[ required, phoneNumber ]}
							component={renderField}
						/>
						<Field
							fieldSize='4'
							name='altphone'
							type='number'
							label='Alternate Phone Number'
							validate={[ phoneNumber ]}
							component={renderField}
						/>
						<Field
							fieldSize='4'
							name='email'
							type='email'
							label='Email Address'
							validate={[ required, email ]}
							component={renderField}
						/>
					</Form.Row>
					<Form.Row className='mb-3'>
						<Field
							label='Are you interested in?'
							fieldSize='6'
							name='workType'
							type='checkbox'
							component={checkboxGroup}
							options={scheduleOptions}
							validate={[ required ]}
						/>
						<Field
							label='What schedule would you prefer?'
							fieldSize='6'
							name='scheduleType'
							type='checkbox'
							component={checkboxGroup}
							options={hoursOptions}
							validate={[ required ]}
						/>
					</Form.Row>
					<Form.Row>
						<Field
							fieldSize='6'
							name='referred'
							type='text'
							label='How did you hear about us?'
							component={renderField}
						/>
						<Field
							fieldSize='6'
							name='desiredPay'
							type='number'
							label='Salary expectation per hour?'
							component={renderField}
						/>
					</Form.Row>
					<Form.Row>
						<Field fieldSize='4' name='position' type='text' label='Desired Position?' component={renderField} />
						<Col md={3}>
							<Form.Label className='float-right'>Date you are available to start?</Form.Label>
						</Col>
						<Field
							fieldSize='5'
							name='availableDate'
							type='date'
							label='Date you are availbe to start?'
							component={renderField}
						/>
					</Form.Row>
					<Form.Row>
						<Field
							label='Are you authorized to work in the US?'
							fieldSize='4'
							name='auth'
							component={renderSelector}
							options={eitherYesNo}
							validate={[ required ]}
						/>
						<Field
							label='Are you under 18 years of age?'
							fieldSize='4'
							name='under18'
							component={renderSelector}
							options={eitherYesNo}
							validate={[ required ]}
						/>
						<Field
							label='If so, can you furnish a work permit?'
							fieldSize='4'
							name='permit'
							component={renderSelector}
							options={eitherYesNoNa}
							validate={[ required ]}
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

export default reduxForm({ form: 'personalData' })(PersonalData);
