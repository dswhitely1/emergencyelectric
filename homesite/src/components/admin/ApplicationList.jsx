import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApplicationCard from './ApplicationCard';
import { Row } from 'react-bootstrap';
class ApplicationList extends Component {
	renderApplicationList() {
		console.log(this.props.apps);
		if (this.props.apps.appList !== undefined) {
			const renderApplicationCards = this.props.apps.appList.map((maps, i) => {
				return <ApplicationCard apps={maps} key={i} />;
			});
			return renderApplicationCards;
		} else {
			return null;
		}
	}
	render() {
		const { appCount } = this.props.apps;
		return (
			<div className='col-md-10 m-auto bg-light application'>
				<h2 className='text-center'>
					{
						appCount === 0 ? `No Applications` :
						`Applications`}
				</h2>
				<Row className='p-4'>{this.renderApplicationList()}</Row>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return { apps: state.applicationList };
};
export default connect(mapStateToProps)(ApplicationList);
