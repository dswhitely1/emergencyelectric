import C from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case C.FETCH_APPLICATIONS:
			return { ...state, appList: action.payload, appCount: Object.keys(action.payload).length };
		default:
			return state;
	}
};
