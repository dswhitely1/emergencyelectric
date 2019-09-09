import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Col, Container } from 'react-bootstrap';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const phoneNumber = value =>
	value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;

const renderField = ({ fieldSize, input, label, type, meta: { touched, error, warning } }) => (
	<Form.Group as={Col} md={fieldSize}>
		<input {...input} placeholder={label} type={type} className='form-control' />
		{touched &&
			((error && <span className='text-danger small'>{error}</span>) ||
				(warning && <span className='text-danger small'>{warning}</span>))}
	</Form.Group>
);

const References = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<section className='ee-content-section bg-light text-dark'>
			<Container>
				<form onSubmit={handleSubmit}>
					<h3 className='mb-1'>Employment Application</h3>
					<h2 className='mb-2'>References</h2>
					<Form.Row>
						<Field
							label='Reference Name'
							name='name'
							validate={[ required ]}
							component={renderField}
							type='text'
							fieldSize='8'
						/>
						<Field
							label='Relationship'
							name='relationship'
							validate={[ required ]}
							component={renderField}
							type='text'
							fieldSize='4'
						/>
					</Form.Row>
					<Form.Row>
						<Field
							label='Phone Number'
							name='phone'
							validate={[ required, phoneNumber ]}
							component={renderField}
							type='text'
							fieldSize='6'
						/>
						<Field
							label='Years Known'
							name='years'
							validate={[ required ]}
							component={renderField}
							type='text'
							fieldSize='6'
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

export default reduxForm({ form: 'references' })(References);
