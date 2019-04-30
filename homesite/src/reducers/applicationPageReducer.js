import C from '../actions/types';

export default (state = { page: 4 }, action) => {
	switch (action.type) {
		case C.CURRENT_APPLICATION_PAGE:
			return { ...state, page: action.payload.page };
		default:
			return state;
	}
};
