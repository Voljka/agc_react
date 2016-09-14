import { combineReducers } from 'redux';
import user from './user';
import grouplist from './grouplist';
import grouplistFilters from './grouplistFilters';
//import popup from './popup'; //////////// ??????????????

export const rootReducer = combineReducers({
	user,
	grouplist,
	grouplistFilters
})