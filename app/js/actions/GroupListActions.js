import fetch from 'isomorphic-fetch';

const requestGroupList = () => {
	return {
		type: 'GET_GROUPLIST_REQUEST'
	}
}

const receiveGroupList = (data) => {
	return {
		type: 'GET_GROUPLIST_SUCCESS',
		payload: data
	}
}

export const clientlistChangeFilter = (filterData) => {
	return {
		type: 'CHANGE_FILTER',
		filterColumn: filterData.filteredColumn,
		filterType: filterData.filterType,
		filterValue: filterData.filterValue
	}
}

export const clientlistDeleteFilter = (field) => {
	return {
		type: 'CLIENT_LIST_DELETE_FILTER',
		filterField: field
	}
}

export const fetchGroupList = () => {
	return dispatch => {
		dispatch(requestGroupList());
		return fetch('http://localhost:8080/api/v1/groups')
			.then(response => response.json())
			.then(json => dispatch(receiveGroupList(json)))
	}
}