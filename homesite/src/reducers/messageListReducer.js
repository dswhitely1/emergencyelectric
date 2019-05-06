import C from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case C.FETCH_MESSAGES:
			return { ...state, messages: action.payload, messageCount: Object.keys(action.payload).length };
		case C.DELETE_MESSAGE:
			const tmpMessages = state.messages.filter(obj => {
				return obj.id !== action.payload.id;
			});
			return { ...state, messages: tmpMessages, messageCount: Object.keys(tmpMessages).length };
		default:
			return state;
	}
};
