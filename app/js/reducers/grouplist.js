
// const loadGroupList = () => {
// 	$.get('http://localhost:8080/api/v1/groups')
// 		.then( function(data) {
// 			dispatch({
// 				type: 'GET_GROUPLIST_SUCCESS',
// 				payload: response.data
// 			})
// 		})
// 		// .error( function(error) {
// 		// 	dispatch({
// 		// 		type: 'GET_GROUPLIST_FAILURE',
// 		// 		payload: response.error
// 		// 	})
// 		// })

// }

const initialState = { list: [], filters: {} };

const grouplist = (state = initialState, action) => {

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
		case 'CHANGE_FILTER':
				
			let newFilter = state.filters;

			

			newFilter[action.filterColumn] = {
				type: action.filterType,
				value: action.filterValue
			}

			// console.log(newFilter);

			let newState = {
				list: state.list,
				filters: Object.assign({}, 
					state.filters, 
					newFilter
				)
			}

			// console.log('new state after filter set');
			// console.log(newState);

			
			return newState;
			break;

		default:
			return state
	}
}

export default grouplist;

// export const GroupList = (state = [], action) => {
// 	switch (action.type) {
// 		case 'ADD_GROUP':
// 		case 'TOGGLE_GROUP':
// 		default:
// 			return state
// 	}
// }

