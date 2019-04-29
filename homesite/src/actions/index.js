import API from '../api';
import C from './types';

export const formValidation = value => {
	return {
		type    : C.CONTACT_FORM_VALIDATION,
		payload : {
			validated : value,
			res       : '',
		},
	};
};

export const resetContactForm = () => {
	return {
		type    : C.RESET_CONTACT_FORM,
		payload : {
			validated : false,
			firstName : '',
			lastName  : '',
			email     : '',
			subject   : '',
			message   : '',
		},
	};
};

export const valueContactFormChange = (item, value) => {
	switch (item) {
		case 'firstName':
			return {
				type    : C.CONTACT_FORM_VALUE_CHANGE_FN,
				payload : { firstName: value },
			};
		case 'lastName':
			return {
				type    : C.CONTACT_FORM_VALUE_CHANGE_LN,
				payload : { lastName: value },
			};
		case 'email':
			return {
				type    : C.CONTACT_FORM_VALUE_CHANGE_EM,
				payload : { email: value },
			};
		case 'subject':
			return {
				type    : C.CONTACT_FORM_VALUE_CHANGE_SU,
				payload : { subject: value },
			};
		case 'message':
			return {
				type    : C.CONTACT_FORM_VALUE_CHANGE_MG,
				payload : { message: value },
			};
		default:
			return null;
	}
};

export const sendMessage = values => async dispatch => {
	const response = await API.post(
		'/messages/new-message',
		values,
	).catch(error => {
		const resp = { status: 'NE' };
		dispatch({ type: C.UPDATE_SERVER_RESPONSE, payload: resp });
	});
	const resp =

			response === undefined ? { status: 'NE' } :
			response;

	dispatch({ type: C.UPDATE_SERVER_RESPONSE, payload: resp });
};

export const showMessageDisplay = value => {
	return {
		type    : C.SHOW_MESSAGE_DISPLAY,
		payload : { messageDisplay: value },
	};
};

export const updateMessageDisplay = (color, message, displayMessage) => {
	return {
		type    : C.UPDATE_MESSAGE_DISPLAY,
		payload : {
			messageDisplay : displayMessage,
			variant        : color,
			message        : message,
		},
	};
};

export const updateFormButton = value => {
	return {
		type    : C.UPDATE_SEND_BUTTON,
		payload : { isSending: value },
	};
};

export const nextApplicationPage = pageNum => {
	return {
		type    : C.CURRENT_APPLICATION_PAGE,
		payload : { page: pageNum },
	};
};

export const prevApplicationPage = pageNum => {
	return {
		type    : C.CURRENT_APPLICATION_PAGE,
		payload : { page: pageNum },
	};
};

export const applicationMessage = message => {
	return {
		type    : C.APPLICATION_ERROR_MESSAGE,
		payload : {
			message : message,
		},
	};
};

export const personalDataFormChange = (item, value) => {
	switch (item) {
		case 'firstName':
			return {
				type    : C.UPDATE_FIRSTNAME_CHANGE,
				payload : { firstName: value },
			};
		case 'middleName':
			return {
				type    : C.UPDATE_MIDDLENAME_CHANGE,
				payload : { middleName: value },
			};
		case 'lastName':
			return { type: C.UPDATE_LASTNAME_CHANGE, payload: { lastName: value } };
		case 'preferredName':
			return {
				type    : C.UPDATE_PREFERREDNAME_CHANGE,
				payload : { preferredName: value },
			};
		case 'address':
			return { type: C.UPDATE_ADDRESS_CHANGE, payload: { address: value } };
		case 'apartment':
			return { type: C.UPDATE_APARTMENT_CHANGE, payload: { apartment: value } };
		case 'city':
			return { type: C.UPDATE_CITY_CHANGE, payload: { city: value } };
		case 'state':
			return { type: C.UPDATE_STATE_CHANGE, payload: { state: value } };
		case 'zipcode':
			return { type: C.UPDATE_ZIPCODE_CHANGE, payload: { zipcode: value } };
		case 'phoneNumber':
			return {
				type    : C.UPDATE_PHONENUMBER_CHANGE,
				payload : { phoneNumber: value },
			};
		case 'alternatePhoneNumber':
			return {
				type    : C.UPDATE_ALTERNATEPHONENUMBER_CHANGE,
				payload : { alternatePhoneNumber: value },
			};
		case 'emailAddress':
			return {
				type    : C.UPDATE_EMAILADDRESS_CHANGE,
				payload : { emailAddress: value },
			};
		case 'scheduleFullTime':
			return {
				type    : C.UPDATE_SCHEDULEFULLTIME_CHANGE,
				payload : { scheduleFullTime: value },
			};
		case 'schedulePartTime':
			return {
				type    : C.UPDATE_SCHEDULEPARTTIME_CHANGE,
				payload : { schedulePartTime: value },
			};
		case 'scheduleTemporary':
			return {
				type    : C.UPDATE_SCHEDULETEMPORARY_CHANGE,
				payload : { scheduleTemporary: value },
			};
		case 'shiftWeekdays':
			return {
				type    : C.UPDATE_SHIFTWEEKDAYS_CHANGE,
				payload : { shiftWeekdays: value },
			};
		case 'shiftWeekends':
			return {
				type    : C.UPDATE_SHIFTWEEKENDS_CHANGE,
				payload : { shiftWeekends: value },
			};
		case 'shiftEvenings':
			return {
				type    : C.UPDATE_SHIFTEVENINGS_CHANGE,
				payload : { shiftEvenings: value },
			};
		case 'shiftNights':
			return {
				type    : C.UPDATE_SHIFTNIGHTS_CHANGE,
				payload : { shiftNights: value },
			};
		case 'howDidYouHearAboutUs':
			return {
				type    : C.UPDATE_HOWDIDYOUHEARABOUTUS_CHANGE,
				payload : { howDidYouHearAboutUs: value },
			};
		case 'desiredPay':
			return {
				type    : C.UPDATE_DESIREDPAY_CHANGE,
				payload : { desiredPay: value },
			};
		case 'whenAreYouAbleToStartWork':
			return {
				type    : C.UPDATE_WHENAREYOUABLETOSTARTWORK_CHANGE,
				payload : { whenAreYouAbleToStartWork: value },
			};
		case 'positionDesired':
			return {
				type    : C.UPDATE_POSITIONDESIRED_CHANGE,
				payload : { positionDesired: value },
			};
		case 'authYes':
			return { type: C.UPDATE_AUTHYES_CHANGE, payload: { authYes: value } };
		case 'authNo':
			return { type: C.UPDATE_AUTHNO_CHANGE, payload: { authNo: value } };
		case 'overYes':
			return { type: C.UPDATE_OVERYES_CHANGE, payload: { overYes: value } };
		case 'overNo':
			return { type: C.UPDATE_OVERNO_CHANGE, payload: { overNo: value } };
		case 'permitYes':
			return { type: C.UPDATE_PERMITYES_CHANGE, payload: { permitYes: value } };
		case 'permitNo':
			return { type: C.UPDATE_PERMITNO_CHANGE, payload: { permitNo: value } };
		default:
			return null;
	}
};

export const personalDataFormValidation = value => {
	return {
		type    : C.PERSONAL_DATA_FORM_VALIDATION,
		payload : {
			formValidate : value,
		},
	};
};
