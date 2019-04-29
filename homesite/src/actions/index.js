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

export const applicationMessage = (message) => {
	return {
		type: C.APPLICATION_ERROR_MESSAGE,
		payload: {
			message: message
		}
	}
}