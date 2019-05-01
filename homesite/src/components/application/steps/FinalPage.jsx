import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { nextApplicationPage } from '../../../actions';
class FinalPage extends Component {
	onHandleSubmit = () => {
		let num = this.props.appPageIndex.page + 1;
		this.props.nextApplicationPage(num);
	};
	render() {
		return (
			<section className='ee-content-section'>
				<h3 className='mb-1'>Employment Application</h3>
				<h2 className='mb-2'>
					Please read carefully before submitting the Application
				</h2>
				<div className='lead text-justify'>
					<p className='p-1'>
						I have submitted the application to{' '}
						<strong className='font-weight-bold text-uppercase'>
							Emergency Electric, Inc
						</strong>{' '}
						for the sole purpose of obtaining employment. I acknowledge that the
						use of this application, and my filling it out, does not indicate
						that any positions are open, nor does it obligate{' '}
						<strong className='text-uppercase font-weight-bold'>
							Emergency Electric, Inc
						</strong>{' '}
						to further process my application.
					</p>
					<p className='p-1'>
						By clicking Submit below attests to the fact that the information
						that I have provided on my application, resume, given verbally, or
						provided in any other marerials, is true and complete to the best of
						my knowledge and also constitutes authority to verify any and all
						information submitted on this application. I understand that any
						misrepresentation or omission of any fact in my application, resume,
						or any other materials, or doing any interviews, can be
						justification fro refusal of employment, or if employed, termination
						from{' '}
						<strong className='font-weight-bold text-uppercase'>
							Emergency Electric, Inc
						</strong>{' '}
						employment.
					</p>
					<p className='font-weight-bold p-1'>
						I understand that this application is not an employment contract for
						any specific length of time between{' '}
						<strong className='text-uppercase font-weight-bold'>
							Emergency Electric, Inc
						</strong>{' '}
						and me, and that in the event I am hired, my employment will be "at
						will" and either{' '}
						<strong className='text-uppercase font-weight-bold'>
							Emergency Electric, Inc
						</strong>{' '}
						or I can terminate my employment with or without cause and with or
						without notice at any time. Nothing contained in any handbook,
						manual, policy and the like, distributed by{' '}
						<strong className='text-uppercase font-weight-bold'>
							Emergency Electric, Inc
						</strong>{' '}
						to its employees is intended to or can create an employment
						contract, an offer of employment or any obligation on{' '}
						<strong className='text-uppercase font-weight-bold'>
							Emergency Electric, Inc's
						</strong>{' '}
						part.{' '}
						<strong className='text-uppercase font-weight-bold'>
							Emergency Electric, Inc
						</strong>{' '}
						may at its sole discretion, hold in abeyance or revoke, amend or
						modify, abridge or change any benefit, policy practice, condtion or
						process affecting its employees.
					</p>
					<p className='p-1'>
						<u>References</u>: I hereby authorize{' '}
						<strong className='text-uppercase font-weight-bold'>
							Emergency Electric, Inc
						</strong>{' '}
						and its agents to make such investigations and inquiries into my
						employment and education history and other related matters as may be
						necessary in arriving at an employment decision. I hereby release
						employers, schools, and other persons from all liability in
						responding to inquires connected with my application and I
						specifically authorize the release of information by any schools,
						businesses, individuals, services or other entities listed by me in
						this form. Furthermore, I authorize the company and its agents to
						release any reference information to clients who request such
						information for purposes of evaluating my credentials and
						qualifications.
					</p>
				</div>
				<Button variant='outline-success' onClick={this.onHandleSubmit}>
					Submit
				</Button>
			</section>
		);
	}
}
const mapStateToProps = state => {
	return { appPageIndex: state.applicationPage };
};
export default connect(mapStateToProps, { nextApplicationPage })(FinalPage);
