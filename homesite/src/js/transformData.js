const answer = response => {
	if (response === 0) {
		return 'No';
	}
	return 'Yes';
};

export const appPersonalDataRow = pd1 => {
	if (pd1 === undefined) {
		return [];
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
};

export const appPersonalDataRow2 = pd2 => {
	if (pd2 === [] || pd2 === undefined) {
		return [];
	}
	const {
		fullTime,
		partTime,
		temporary,
		weekdays,
		weekends,
		evenings,
		nights,
		reffered,
		desiredpay,
		availableDate,
		position,
		authYes,
		overYes,
		permitYes,
	} = pd2;

	const persData2Row1 = [ answer(weekends), answer(weekdays), answer(temporary) ];
	const persData2Row2 = [ answer(fullTime), answer(partTime), answer(evenings), answer(nights) ];
	const persData2Row3 = [ reffered, desiredpay, availableDate, position ];
	const auth =

			authYes === 0 ? 'No' :
			'Yes';
	const over =

			overYes === 0 ? 'No' :
			'Yes';
	const permit =

			over === 'Yes' ? permitYes === 0 ? 'No' :
			'Yes' :
			'NA';
	const persData2Row4 = [ auth, over, permit ];
	return [ persData2Row1, persData2Row2, persData2Row3, persData2Row4 ];
};

export const appEmploymentDataRows = emp => {
	if (emp === [] || emp === undefined) {
		return [];
	}
	const {
		companyName,
		companyPhone,
		companyCitySt,
		companySupervisor,
		startDate,
		endDate,
		reasonLeaving,
		contactYes,
	} = emp;
	const emp1 = [ companyName, companyCitySt, companyPhone ];
	const emp2 = [ companySupervisor, startDate, endDate ];
	const emp3 = [ reasonLeaving, answer(contactYes) ];

	return [ emp1, emp2, emp3 ];
};

export const appEducationDataRows = edu => {
	if (edu === undefined || edu === []) {
		return [];
	}
	const { schoolName, subject, graduate, degree } = edu;
	return [ schoolName, subject, graduate, degree ];
};

export const appReferenceDataRows = ref => {
	if (ref === [] || ref === undefined) {
		return [];
	}
	const { name, relationship, years, phone } = ref;
	return [ name, relationship, years, phone ];
};
