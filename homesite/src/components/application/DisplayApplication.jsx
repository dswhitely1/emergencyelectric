import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApplication } from '../../actions';
import rowHeaders from '../../js/constants';
import TableCreation from '../admin/TableCreation';

class DisplayApplication extends Component {
	componentWillMount() {
		this.props.fetchApplication(24, 'personalData');
		this.props.fetchApplication(24, 'personalData2');
		this.props.fetchApplication(24, 'employment');
		this.props.fetchApplication(24, 'education');
		this.props.fetchApplication(24, 'references');
	}
	appPersonalDataRow(pd1) {
		if (pd1.firstName === undefined) {
			return null;
		}
		const {
			firstName,
			middleName,
			lastName,
			prefName,
			address1,
			address2,
			city,
			state,
			zipCode,
			phone,
			altPhone,
			email,
		} = pd1;
		const pdrData1 = [ firstName, middleName, lastName, prefName ];
		const pdrData2 = [ address1, address2 ];
		const pdrData3 = [ city, state, zipCode ];
		const pdrData4 = [ phone, altPhone, email ];
		const pdrDataRow = [ pdrData1, pdrData2, pdrData3, pdrData4 ];

		return pdrDataRow;
	}
	renderTables(tableHeader, tableRows, keyValue) {
		// while (tableRows === null) {
		// 	this.appPersonalDataRow(this.props.appDisplay.personalData);
		// }
		const rowSection = tableRows.map((tRows, i) => {
			return <TableCreation tHeader={tableHeader[i]} tData={tRows} key={`${keyValue}-${i}`} />;
		});

		return rowSection;
	}
	renderList() {
		const { personalData, personalData2, employment, education, references } = this.props.appDisplay;

		if (personalData === undefined) {
			return <div>Loading Application</div>;
		} else {
			return (
				<div id='application-root'>
					<header className='application'>
						<h1 className='text-center'>Emergency Electric Inc</h1>
					</header>
					<section className='col-lg-6 mx-auto'>
						<p className='lead text-justify'>
							<strong className='font-weight-bold text-uppercase'>Emergency Electric, Inc</strong> is an equal
							opportunity employer and does not discriminate against any applicant or employee based on race, color,
							religion, sex, national origin, disability, age, or military or veteran status in accordance with federal
							law. In addition, <strong className='font-weight-bold text-uppercase'>
								Emergency Electric, Inc
							</strong>{' '}
							complies with applicable state and local laws governing non-discrimination in employment in every
							jurisdiction in which it maintains facilities.{' '}
							<strong className='font-weight-bold text-uppercase'>Emergency Electric, Inc</strong> also provides
							reasonable accommodation to qualified individuals with disabilities in accordance with applicable laws.
						</p>
					</section>
					<section className='application'>
						<h2 className='text-center'>Personal Data</h2>
						{this.renderTables(rowHeaders.pdr, this.appPersonalDataRow(personalData[0]), 'persData1')}
					</section>
				</div>
			);
		}
	}
	render() {
		return <div>{this.renderList()}</div>;
	}
}
const mapStateToProps = state => {
	return { appDisplay: state.applicationDisplay, msgDisplay: state.messageDisplay };
};
export default connect(mapStateToProps, { fetchApplication })(DisplayApplication);
