import C from '../actions/types';

const INITIAL_STATE = {
	messageDisplay : false,
	variant        : '',
	message        : '',
	res            : '',
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case C.SHOW_MESSAGE_DISPLAY:
			return { ...state, messageDisplay: action.payload.messageDisplay };
		case C.UPDATE_SERVER_RESPONSE:
			console.log(action.payload);
			if (action.payload.status === 'Network Error') {
				return {
					...state,
					res            : '',
					messageDisplay : true,
					variant        : 'primary',
					message        :
						'Network is unreachable, please try your request later.',
				};
			} else if (action.payload.status === 201) {
				return {
					...state,
					res            : action.payload.statusText,
					messageDisplay : true,
					variant        : 'info',
					message        : `You're message to Emergency Electric Inc. has been successfully sent!`,
				};
			} else {
				return {
					...state,
					res            : action.payload.statusText,
					messageDisplay : true,
					variant        : 'primary',
					message        : `You're message was not sent, please try again in a few moments.`,
				};
			}
		default:
			return state;
	}
};
