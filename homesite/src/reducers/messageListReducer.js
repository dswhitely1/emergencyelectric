import C from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case C.FETCH_MESSAGES:
			return { ...state, messages: action.payload };
		case C.DELETE_MESSAGE:
			const tmpMessages = state.messages.filter(obj => {
				console.log(obj, action.payload.id);
				return obj.id !== action.payload.id;
			});
			console.log(tmpMessages);
			return { ...state, messages: tmpMessages };
		default:
			return state;
	}
};
