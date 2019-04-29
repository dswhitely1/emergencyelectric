import C from '../actions/types';

const INITIAL_STATE = {
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
					variant        : 'primary',
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
					variant        : 'primary',
					isSending      : false,
					message        : `You're message was not sent, please try again in a few moments.`,
				};
			}
			case C.APPLICATION_ERROR_MESSAGE:
				return {...state, messageDisplay: true, variant:'primary', message: action.payload.message}
		default:
			return state;
	}
};
