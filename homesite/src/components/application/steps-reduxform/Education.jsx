import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Col, Container } from 'react-bootstrap';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
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

const Education = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<section className='ee-content-section bg-light text-dark'>
			<Container>
				<form onSubmit={handleSubmit}>
					<h3 className='mb-1'>Employment Application</h3>
					<h2 className='mb-2'>Education and Skills</h2>
					<Form.Row>
						<Field
							label='Name of School'
							name='schoolName'
							type='text'
							fieldSize='6'
							validate={[ required ]}
							component={renderField}
						/>
						<Field
							label='Major Subject'
							name='subject'
							type='text'
							fieldSize='6'
							validate={[ required ]}
							component={renderField}
						/>
					</Form.Row>
					<Form.Row>
						<Field
							name='graduate'
							fieldSize='6'
							label='Did you graduate?'
							options={eitherYesNo}
							validate={[ required ]}
							component={renderSelector}
						/>
						<Field
							label='Degree or Diploma'
							name='degree'
							type='text'
							fieldSize='6'
							validate={[ required ]}
							component={renderField}
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

export default reduxForm({ form: 'eductaion' })(Education);
