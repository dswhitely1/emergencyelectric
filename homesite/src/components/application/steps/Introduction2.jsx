import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { nextApplicationPage, prevApplicationPage } from '../../../actions';
class Introduction2 extends Component {
	onNextPageClick = () => {
		let num = this.props.appPageIndex.page + 1;
		this.props.nextApplicationPage(num);
	};

	onPrevPageClick = () => {
		let num = this.props.appPageIndex.page - 1;
		this.props.prevApplicationPage(num);
	};

	render() {
		return (
			<div>
				<section className='ee-content-section text-center bg-light text-dark'>
					<Container>
						<h3 className='mb-1'>Employment Application</h3>
						<h2 className='mb-2'>Federal Law Requirements</h2>
						<div className='col-lg-10 mx-auto'>
							<p className='text-justify lead'>
								Federal law requires that employers hire only individuals who
								are authorized to be lawfully employed in the United States. In
								compliance with these laws,{' '}
								<strong className='text-uppercase font-weight-bold'>
									Emergency Electric, Inc
								</strong>{' '}
								will verify the status of every individual offered employment
								with the Company. In this connection, all offers of employment
								are subject to verification of the applicant's identity and
								employment authorization, and it will be necessary for you to
								submit such documents as are required by law to verify your
								identification and employment authorization.{' '}
							</p>
							<Button
								variant='outline-info'
								className='float-right'
								onClick={this.onNextPageClick}>
								Continue
							</Button>
							<Button
								variant='outline-info'
								className='float-left'
								onClick={this.onPrevPageClick}>
								Previous
							</Button>
						</div>
					</Container>
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { appPageIndex: state.applicationPage };
};

export default connect(mapStateToProps, {
	nextApplicationPage,
	prevApplicationPage,
})(Introduction2);
