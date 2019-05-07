import C from '../actions/types';

export default (state = { page: 0 }, action) => {
	switch (action.type) {
		case C.ADMIN_PAGE_CHANGE:
			return { ...state, page: action.payload.page };
		case C.VIEW_APPLICATION:
			return { ...state, page: action.payload.page, appId: action.payload.appId };
		default:
			return state;
	}
};
