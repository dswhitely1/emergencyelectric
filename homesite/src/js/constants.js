const firstName = 'First name';
const middleName = 'Middle Name';
const lastName = 'Last Name';
const preferredName = 'Preferred Name';
const address = 'Address';
const apartment = 'Apartment';
const city = 'City';
const state = 'State';
const zipCode = 'Zip Code';
const phoneNumber = 'Phone Number';
const altPhoneNumber = 'Alt Phone Number';
const email = 'Email';
const fullTime = 'Full Time';
const partTime = 'Part Time';
const temporary = 'Temporary';
const weekdays = 'Weekdays';
const weekends = 'Weekends';
const evenings = 'Evenings';
const nights = 'Nights';
const referral = 'Referral';
const desiredPay = 'Desired Pay';
const dateYouCanStart = 'Date you can start';
const positionDesired = 'Position Desired';
const areYouAuthorizedToWorkInTheUnitedStates = 'Are you authorized to work in the United States?';
const areYouUnder18YearsOfAge = 'Are you under 18 years of age?';
const ifYesCanYouProvideAWorkPermit = 'If yes, can you provide a work permit?';

const personalDataRow1 = [ firstName, middleName, lastName, preferredName ];
const personalDataRow2 = [ address, apartment ];
const personalDataRow3 = [ city, state, zipCode ];
const personalDataRow4 = [ phoneNumber, altPhoneNumber, email ];
const personalDataRow5 = [ fullTime, partTime, temporary ];
const personalDataRow6 = [ weekdays, weekends, evenings, nights ];
const personalDataRow7 = [ referral, desiredPay, dateYouCanStart, positionDesired ];
const personalDataRow8 = [
	areYouAuthorizedToWorkInTheUnitedStates,
	areYouUnder18YearsOfAge,
	ifYesCanYouProvideAWorkPermit,
];
const companyName = 'Company Name';
const cityAndState = 'City and State';
const telephoneNumber = 'Telephone Number';
const supervisorName = 'Supervisor Name';
const dateStarted = 'Date Started';
const dateEnded = 'Date Ended';
const reasonForLeaving = 'Reason For Leaving';
const mayWeContact = 'May we Contact';
const schoolName = 'School Name';
const subjectStudied = 'Subject Studied';
const didYouGraduate = 'Did You Graduate';
const degreeCertificationOrDiploma = 'Degree, Certification, or Diploma';
const name = 'Name';
const relationship = 'Relationship';
const yearsKnown = 'Years Known';
const refPhoneNumber = 'Phone Number';

const employmentRow1 = [ companyName, cityAndState, telephoneNumber ];
const employmentRow2 = [ supervisorName, dateStarted, dateEnded ];
const employmentRow3 = [ reasonForLeaving, mayWeContact ];

const personalDataRows1 = [ personalDataRow1, personalDataRow2, personalDataRow3, personalDataRow4 ];
const personalDataRows2 = [ personalDataRow5, personalDataRow6, personalDataRow7, personalDataRow8 ];

const employmentRows = [ employmentRow1, employmentRow2, employmentRow3 ];
const educationRows = [ schoolName, subjectStudied, didYouGraduate, degreeCertificationOrDiploma ];
const referenceRows = [ name, relationship, yearsKnown, refPhoneNumber ];

export default {
	pdr  : personalDataRows1,
	pdr2 : personalDataRows2,
	emp  : employmentRows,
	edu  : educationRows,
	ref  : referenceRows,
};
