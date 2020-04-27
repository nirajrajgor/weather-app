import { combineReducers } from 'redux';
import { HomeReducer } from './app/home';

export default combineReducers({
	homeState: HomeReducer,
});