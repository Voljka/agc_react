import React from  'react';
import { connect } from 'react-redux';

import { fetchGroupList, clientlistChangeFilter, clientlistDeleteFilter } from '../actions/GroupListActions'
import { TEXT, SELECTOR_LIST, CHECKBOX, SELECTOR_LIST_MULTI, SELECTOR_LIST_MULTI_OPTIONAL } from '../constants/filters'

import Table from '../components/common/tables/Table.react'

import { dynamicSort } from '../lib/common'


let fields;

let screenWidth = window.screen.orientation.type.indexOf('landscape') > -1 ? $(window).width() : $(window).height();

if (screenWidth > 1024)
	fields = require('../tables/ClientList/1024.js')
else if (screenWidth > 800)
		fields = require('../tables/ClientList/800.js')
	else
		fields = require('../tables/ClientList/480.js');

var yesNo = {
	0: ' ',
	1: 'V'
}

var workersDirectory = [
	{
		id: 19,
		name: 'Kozharin'
	},
	{
		id: 17,
		name: 'Zhosan'
	},
	{
		id: 18,
		name: 'Kulikova'
	},
	{
		id: 13,
		name: 'Abramova'
	},
	{
		id: 14,
		name: 'Ivanova'
	}
]

var uncode = 	{
	manager: workersDirectory,
	operator: workersDirectory,
	plf: yesNo,
	dlf: yesNo,
	mf: yesNo,
	sdlf: yesNo
}

fields.forEach( field => {
	if (field.select && field.select instanceof Object) 
		uncode[field.id] = field.select
})

const getVis = (list, filters) => {
	
	if (Object.keys(filters).length === 0 && filters.constructor === Object) 
		return list;

	// Sort list by Group name
	list.sort(dynamicSort("name"));
	
	return list.filter( function(group) {
		
		let isValid = true;
		let filter, field;
		// console.log(group);
		
		for (var key in filters) {

			filter = filters[key];
			field = key.toString();

			switch (filter.type) {
				
				case TEXT:
					if (group[field].indexOf(filter.value) == -1)
						isValid = false;
					break;
				
				case SELECTOR_LIST: 
					if (group[field] != filter.value) 
						isValid = false
					break; 

				case SELECTOR_LIST_MULTI: 
					if (! filter.value.includes(group[field].toString())) 
						isValid = false
					break; 
				
				case SELECTOR_LIST_MULTI_OPTIONAL: 
					if (! filter.value.includes(group[field].toString())) 
						isValid = false
					break; 
				
				case CHECKBOX:
					if ((filter.value == 1) && (group[field] != filter.value)) {
						isValid = false
					}
					break; 
			}
		}
		
		return isValid
	})
}

const mapStateToProps = (state) => {

	return {
		filter: state.grouplist.filters,
		list: getVis(state.grouplist.list, state.grouplist.filters),
		fields: fields,
		uncode: uncode,
		tableId: 'ClientsList'

	}
}

const mapDispatchToProps = (dispatch) => {

	dispatch(fetchGroupList());

	return {

		changeFilter: (filter) => {
			dispatch(clientlistChangeFilter(filter))
		},
		deleteFilter: (field) => {
			dispatch(clientlistDeleteFilter(field))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);