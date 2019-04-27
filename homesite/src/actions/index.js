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
				type: C.CONTACT_FORM_VALUE_CHANGE_SU,
				payload: { subject: value },
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
	const response = await API.post('/message', values).catch(error => {
		console.log(error);
		if (!error.status) {
			dispatch({
				type    : C.UPDATE_SERVER_RESPONSE,
				payload : { status: 'Network Error' },
			});
		}
	});
	dispatch({ type: C.UPDATE_SERVER_RESPONSE, payload: response });
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
