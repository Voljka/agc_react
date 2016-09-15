import React from  'react';
import { connect } from 'react-redux';

import { fetchGroupList, clientlistChangeFilter, clientlistDeleteFilter } from '../actions/GroupListActions'
import { TEXT, SELECTOR_LIST, CHECKBOX, SELECTOR_LIST_MULTI, SELECTOR_LIST_MULTI_OPTIONAL } from '../constants/filters'

import Table from '../components/common/tables/Table.react'

var yesNo = {
	0: '',
	1: 'V'
}

var workersDirectory = {
	1: 'Kozharin',
	2: 'Kulikova',
	3: 'Zhosan'
}

var shipmentsDirectory = {
	1: 'Plant',
	2: 'Warehose'
}

var profileTypesDirectory = {
	1: "Interior",
	2: 'Exterior',
	3: 'Int/Ext'
}

var uncode = 	{
		manager: workersDirectory,
		operator: workersDirectory,
		shipmentPlace: shipmentsDirectory,
		profileType: profileTypesDirectory,
		plf: yesNo,
		dlf: yesNo,
		mf: yesNo,
		sdlf: yesNo
}

let fields;

let screenWidth = window.screen.orientation.type.indexOf('landscape') > -1 ? $(window).width() : $(window).height();

if (screenWidth > 1024)
	fields = require('../tables/ClientList/1024.js')
else if (screenWidth > 800)
		fields = require('../tables/ClientList/800.js')
	else
		fields = require('../tables/ClientList/480.js');


const getVis = (list, filters) => {
	
	// console.log('getVis invoked');
	// console.log(filters);
	
	if (Object.keys(filters).length === 0 && filters.constructor === Object) 
	// if (!filter &&  filter.length === 0)
		return list;
	
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
		setData: (data) => {
			dispatch({
				type: 'ADD_DATA',
				payload: data
			})
		},

		changeFilter: (filter) => {
			dispatch(clientlistChangeFilter(filter))
		},
		deleteFilter: (field) => {
			dispatch(clientlistDeleteFilter(field))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);


