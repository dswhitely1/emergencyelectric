import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApplication } from '../../actions';
import rowHeaders from '../../js/constants';
import TableCreation from '../admin/TableCreation';
import {
	appPersonalDataRow,
	appPersonalDataRow2,
	appEmploymentDataRows,
	appEducationDataRows,
	appReferenceDataRows,
} from '../../js/transformData';
class DisplayApplication extends Component {
	componentWillMount() {
		this.props.fetchApplication(43, 'personalData');
		this.props.fetchApplication(43, 'personalData2');
		this.props.fetchApplication(43, 'employment');
		this.props.fetchApplication(43, 'education');
		this.props.fetchApplication(43, 'references');
	}

	renderTables(tableHeader, tableRows, keyValue, sect) {
		if (sect === 'eduRows' || sect === 'refRows') {
			return (
				<span>
					<TableCreation tHeader={tableHeader} tData={tableRows} />
				</span>
			);
		} else {
			const rowSection = tableRows.map((tRows, i) => {
				if (sect === 'persData2' && i === 0) {
					return (
						<span>
							<p className='lead text-center'>Are you interested in?</p>
							<TableCreation tHeader={tableHeader[i]} tData={tRows} key={`${keyValue}-${i}`} />
						</span>
					);
				} else if (sect === 'persData2' && i === 1) {
					return (
						<span>
							<p className='lead text-center'>What schedule would you prefer?</p>
							<TableCreation tHeader={tableHeader[i]} tData={tRows} key={`${keyValue}-${i}`} />
						</span>
					);
				} else if (sect === 'empRows' && i === 2) {
					return (
						<span>
							<TableCreation tHeader={tableHeader[i]} tData={tRows} key={`${keyValue}-${i}`} />
							<hr />
						</span>
					);
				} else {
					return <TableCreation tHeader={tableHeader[i]} tData={tRows} key={`${keyValue}-${i}`} />;
				}
			});
			return rowSection;
		}
	}
	renderList() {
		const { personalData, personalData2, employment, education, references } = this.props.appDisplay;
		if (
			personalData === undefined ||
			personalData2 === undefined ||
			employment === undefined ||
			education === undefined ||
			references === undefined
		) {
			return <div>Loading Application</div>;
		} else {
			return (
				<div id='application-root'>
					<header className='application'>
						<h1 className='text-center'>Emergency Electric Inc</h1>
					</header>
					<section className='col-lg-10 mx-auto border-bottom'>
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
					<section className='application border-bottom'>
						<h2 className='text-center'>Personal Data</h2>
						{this.renderTables(rowHeaders.pdr, appPersonalDataRow(personalData[0]), 'persData1', 'persData1')}
						{this.renderTables(rowHeaders.pdr2, appPersonalDataRow2(personalData2[0]), 'persData2', 'persData2')}
						<p className='text-justify lead'>
							Federal law requires that employers hire only individuals who are authorized to be lawfully employed in
							the United States. In compliance with these laws,{' '}
							<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc</strong> will verify the
							status of every individual offered employment with the Company. In this connection, all offers of
							employment are subject to verification of the applicant's identity and employment authorization, and it
							will be necessary for you to submit such documents as are required by law to verify your identification
							and employment authorization.{' '}
						</p>
					</section>
					<section className='application border-bottom'>
						<h2 className='text-center'>Employment History</h2>
						{employment.map((empRows, i) =>
							this.renderTables(rowHeaders.emp, appEmploymentDataRows(empRows), `empRows-${i}`, 'empRows'),
						)}
					</section>
					<section className='application border-bottom'>
						<h2 className='text-center'>Education / Skills</h2>
						{education.map((eduRows, i) =>
							this.renderTables(rowHeaders.edu, appEducationDataRows(eduRows), `eduRows-${i}`, 'eduRows'),
						)}
					</section>
					<section className='application border-bottom'>
						<h2 className='text-center'>References</h2>
						{references.map((refRows, i) =>
							this.renderTables(rowHeaders.ref, appReferenceDataRows(refRows), `refRows-${i}`, 'refRows'),
						)}
					</section>
					<section className='application'>
						<h2 className='mb-2 text-center'>Please read carefully before submitting the Application</h2>
						<div className='lead text-justify'>
							<p className='p-1'>
								I have submitted the application to{' '}
								<strong className='font-weight-bold text-uppercase'>Emergency Electric, Inc</strong> for the sole
								purpose of obtaining employment. I acknowledge that the use of this application, and my filling it out,
								does not indicate that any positions are open, nor does it obligate{' '}
								<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc</strong> to further process
								my application.
							</p>
							<p className='p-1'>
								By clicking Submit below attests to the fact that the information that I have provided on my
								application, resume, given verbally, or provided in any other marerials, is true and complete to the
								best of my knowledge and also constitutes authority to verify any and all information submitted on this
								application. I understand that any misrepresentation or omission of any fact in my application, resume,
								or any other materials, or doing any interviews, can be justification for refusal of employment, or if
								employed, can result in termination from{' '}
								<strong className='font-weight-bold text-uppercase'>Emergency Electric, Inc</strong>.
							</p>
							<p className='font-weight-bold p-1'>
								I understand that this application is not an employment contract for any specific length of time between{' '}
								<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc</strong> and me, and that in
								the event I am hired, my employment will be "at will" and either{' '}
								<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc</strong> or I can terminate
								my employment with or without cause and with or without notice at any time. Nothing contained in any
								handbook, manual, policy and the like, distributed by{' '}
								<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc</strong> to its employees is
								intended to or can create an employment contract, an offer of employment or any obligation on{' '}
								<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc's</strong> part.{' '}
								<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc</strong> may at its sole
								discretion, hold in abeyance or revoke, amend or modify, abridge or change any benefit, policy practice,
								condtion or process affecting its employees.
							</p>
							<p className='p-1'>
								<u>References</u>: I hereby authorize{' '}
								<strong className='text-uppercase font-weight-bold'>Emergency Electric, Inc</strong> and its agents to
								make such investigations and inquiries into my employment and education history and other related
								matters as may be necessary in arriving at an employment decision. I hereby release employers, schools,
								and other persons from all liability in responding to inquires connected with my application and I
								specifically authorize the release of information by any schools, businesses, individuals, services or
								other entities listed by me in this form. Furthermore, I authorize the company and its agents to release
								any reference information to clients who request such information for purposes of evaluating my
								credentials and qualifications.
							</p>
						</div>
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
