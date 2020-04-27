import { combineReducers } from 'redux';
/* PLOP_INJECT_REDUCER_IMPORT */
import { ShareScreenReducer } from '../app/shareScreen';

export default combineReducers({
	CommonState: CommonReducer,
	/* PLOP_INJECT_REDUCER */
	ShareScreenState: ShareScreenReducer,
});