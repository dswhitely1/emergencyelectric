import React, {useContext} from 'react';
import useForm from '../../hooks/useForm';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { ActionsContext } from '../../contexts/ActionsContext';

function Contact () {
  const [values, handleChange, handleSubmit, handleReset] = useForm({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
  }, submitValues);

  function submitValues () {
    sendMessage(values);
  }

  const { first_name, last_name, email, subject, message } = values;
  const {message: {sendMessage}} = useContext(ActionsContext);
  return (
    <section
      className='ee-content-section bg-light text-dark'
      id='contact'
    >
      <Container>
        <h3 className='mb-1 text-center'>Contact Us</h3>
        <h2 className='mb-5 text-center'>Send Us a Message!</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formContact'>
            <Row className='mb-2'>
              <Col
                md={6}
                className='mb-sm-2 mb-md-0'
              >
                <Form.Control
                  required
                  value={first_name}
                  type='text'
                  placeholder='First Name'
                  name='first_name'
                  onChange={handleChange}
                />
                <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  name='last_name'
                  value={last_name}
                  type='text'
                  placeholder='Last Name'
                  onChange={handleChange}
                />
                <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
              </Col>
            </Row>
            <Form.Control
              required
              className='mb-2'
              type='email'
              value={email}
              name='email'
              placeholder='Email Address'
              onChange={handleChange}
            />
            <Form.Control.Feedback type='invalid'>Please provide a valid email
              address</Form.Control.Feedback>
            <Form.Control
              required
              name='subject'
              value={subject}
              type='text'
              className='mb-2'
              placeholder='Subject'
              onChange={handleChange}
            />
            <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
            <Form.Control
              as='textarea'
              className='mb-2'
              rows={4}
              placeholder='Enter Message Here'
              required
              name='message'
              value={message}
              onChange={handleChange}
            />
            <Button
              type='submit'
              variant='warning'
              className='mr-2'
              size='lg'
            >
              Send Message
            </Button>
            <Button
              type='button'
              variant='outline-warning'
              size='lg'
              onClick={handleReset}
            >
              Clear Form
            </Button>

            <Scrollchor
              to='#page-top'
              className='btn btn-warning btn-lg float-right'
            >
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </Scrollchor>

          </Form.Group>
        </Form>
      </Container>
    </section>
  );
}
export default Contact;
