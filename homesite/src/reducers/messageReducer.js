import C from '../actions/types';

const INITIAL_STATE = {
	appId          : null,
	messageDisplay : false,
	variant        : '',
	message        : '',
	isSending      : false,
	res            : '',
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case C.SHOW_MESSAGE_DISPLAY:
			return { ...state, messageDisplay: action.payload.messageDisplay };
		case C.UPDATE_SEND_BUTTON:
			return { ...state, isSending: action.payload.isSending };
		case C.UPDATE_SERVER_RESPONSE:
			if (action.payload.status === 'NE') {
				return {
					...state,
					res            : '',
					messageDisplay : true,
					variant        : 'danger',
					isSending      : false,
					message        :
						'Network is unreachable, please try your request later.',
				};
			} else if (action.payload.status === 201) {
				return {
					...state,
					res            : action.payload.statusText,
					messageDisplay : true,

					variant        : 'info',
					isSending      : false,
					message        : `You're message to Emergency Electric Inc. has been successfully sent!`,
				};
			} else {
				return {
					...state,
					res            : action.payload.statusText,
					messageDisplay : true,
					variant        : 'danger',
					isSending      : false,
					message        : `You're message was not sent, please try again in a few moments.`,
				};
			}
		case C.APPLICATION_ERROR_MESSAGE:
			return {
				...state,
				messageDisplay : true,
				variant        : 'danger',
				message        : action.payload.message,
			};
		case C.UPDATE_PERSONAL_DATA_DB_1:
			if (action.payload.appId === 'NE') {
				return {
					...state,
					res            : '',
					messageDisplay : true,
					variant        : 'danger',
					message        :
						'Network is unreachable, please try your request later.',
				};
			}
			return {
				...state,
				appId          : action.payload.appId,
				res            : '',
				messageDisplay : true,
				variant        : 'info',
				message        : 'Your application has been started',
			};
		case C.RESET_APPID:
			return { ...state, appId: null };
		case C.UPDATE_EMPLOYMENT_DATA_DB:
			if (action.payload.status === 'NE') {
				return {
					...state,
					res            : '',
					messageDisplay : true,
					variant        : 'danger',
					message        :
						'Network is unreachable, please try your request later.',
				};
			}
			return {
				...state,
				messageDisplay : true,
				variant        : 'info',
				message        : `You're employment information has been updated.`,
			};

		case C.UPDATE_EDUCATION_DATA_DB:
			if (action.payload.status === 'NE') {
				return {
					...state,
					res            : '',
					messageDisplay : true,
					variant        : 'danger',
					message        :
						'Network is unreachable, please try your request later.',
				};
			}
			return {
				...state,
				messageDisplay : true,
				variant        : 'info',
				message        : `You're education information has been updated.`,
			};
		case C.UPDATE_REFERENCE_DATA_DB:
			if (action.payload.status === 'NE') {
				return {
					...state,
					res            : '',
					messageDisplay : true,
					variant        : 'danger',
					message        :
						'Network is unreachable, please try your request later.',
				};
			}
			return {
				...state,
				messageDisplay : true,
				variant        : 'info',
				message        : `You're references information has been updated.`,
			};
		default:
			return state;
	}
};
