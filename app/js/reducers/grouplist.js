
const initialState = { list: [], filters: {} };

const grouplist = (state = initialState, action) => {

	let newFilter, oldFilter;

	switch (action.type) {

		case 'GET_GROUPLIST_SUCCESS':
			return {
				list: action.payload,
				filters: []	
			}
			break;
		case 'GET_GROUPLIST_REQUEST':
			return state;
			break;

		case 'ADD_DATA':
			
			return {
				list: state.list,
				filters: action.payload
			}
			break;

		case 'CLIENT_LIST_DELETE_FILTER':
			
			let deletingFilter = action.filterField;

			oldFilter = state.filters; 
			newFilter = {};
			
			for (var key in oldFilter) {
				if (key != deletingFilter) {
					newFilter[key] = oldFilter[key]
				}
			}
			
			return {
				list: state.list,
				filters: newFilter	
			};
			break;

		case 'CHANGE_FILTER':
				
			newFilter = state.filters;

			newFilter[action.filterColumn] = {
				type: action.filterType,
				value: action.filterValue
			}

			let newState = {
				list: state.list,
				filters: Object.assign({}, 
					state.filters, 
					newFilter
				)
			}

			return newState;
			break;

		default:
			return state
	}
}

export default grouplist;