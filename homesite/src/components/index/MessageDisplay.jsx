import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { showMessageDisplay } from '../../actions';
class MessageDisplay extends Component {
	handleClick = () => {
		this.props.showMessageDisplay(false);
	};
	render() {
		const { variant, message } = this.props.msgDisplay;
		return (
			<div className='text-center'>
				<Alert variant={variant} className='mb-0'>
					{message}

					<Button
						variant={`outline-${variant}`}
						size='sm'
						className='ml-2'
						onClick={this.handleClick}>
						Dismiss
					</Button>
				</Alert>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return { msgDisplay: state.messageDisplay };
};
export default connect(mapStateToProps, { showMessageDisplay })(MessageDisplay);
