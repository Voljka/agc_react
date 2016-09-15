import React from 'react'

import TableRow from './TableRow.react'

import { TEXT, SELECTOR_LIST, CHECKBOX, SELECTOR_LIST_MULTI, SELECTOR_LIST_MULTI_OPTIONAL } from '../../../constants/filters'

function getSelectValues(select) {
	
	var result = [];
	var options = select && select.options;
	var opt;

	for (var i=0, iLen=options.length; i<iLen; i++) {
		opt = options[i];

		if (opt.selected) {
			result.push(opt.value || opt.text);
		}
	}
	return result;
}

function selectAllItems(select) {
	var options = select && select.options;
	var opt;
	for (var i=1, iLen=options.length; i<iLen; i++) {
		opt = options[i];

		opt.selected = false;
	}
}

const Table = ({filter, list, fields, uncode, tableId, setData, changeFilter, deleteFilter}) => {

	let data  = list;
	let inputValues = {};

	let tableRows = [],
		tableHeader = [],
		tableFilters = [];

	let filteredColumns = 0;

	let filterMultiOptions,
		selectedItems;

	// Show Table Header
	fields.forEach( function(field) {
		
		if (field.filterable) {
			filteredColumns++;
		}

		tableHeader.push(
			<td key={field.id} width={field.width}> 
				{field.title}
			</td>
		);
	})

	// Show Table Filter Row
	if (filteredColumns > 0) {

		fields.forEach( function(field) {
			
			if (field.filterable) {
				// Make filter element
				let filter;
				
				switch (field.filtertype) {
					case TEXT: 
						filter = <input 
							type="search" 
							size='5' 
							maxLength='15' 
							ref={ (input) => {
								inputValues[field.id] = input
							}}
							onChange = { () => {
								changeFilter({
									filteredColumn: field.id,
									filterType: TEXT,
									filterValue: inputValues[field.id].value
								})
							}}
						/>;
						break;
					
					case CHECKBOX: 
						filter = <input 
							type='checkbox' 
							ref={ (input) => {
								inputValues[field.id] = input
							}}
							onChange = { () => {
								changeFilter({
									filteredColumn: field.id,
									filterType: CHECKBOX,
									filterValue: inputValues[field.id].checked ? 1 : 0
								})
							}}
						/>;
						break;
					
					case SELECTOR_LIST: 
						let filterOptions = [];
						for (var key in field.select) {
							filterOptions.push(
								<option key={key} value={key} >
									{field.select[key]}
								</option>
							)
						};
						filter = (
							<select
								// className="form-control"
								ref={ (input) => {
									inputValues[field.id] = input
								}}
								onChange = { () => {
									changeFilter({
										filteredColumn: field.id,
										filterType: SELECTOR_LIST,
										filterValue:  inputValues[field.id].value
									})
								}}
							>
								{ filterOptions}
							</select>
						);
						break;

					case SELECTOR_LIST_MULTI: 
						filterMultiOptions = [];
						for (var key in field.select) {
							filterMultiOptions.push(
								<option key={key} value={key} >
									{field.select[key]}
								</option>
							)
						};
						filter = (
							<select
								multiple="true"
								// className="form-control"
								ref={ (input) => {
									inputValues[field.id] = input
								}}
								onChange = { () => {
									changeFilter({
										filteredColumn: field.id,
										filterType: SELECTOR_LIST_MULTI,
										filterValue: getSelectValues( inputValues[field.id] )
									})
								}}
							>
								{ filterMultiOptions}
							</select>
						);
						break;

					case SELECTOR_LIST_MULTI_OPTIONAL: 
						
						filterMultiOptions = [];
						filterMultiOptions.push(<option key="0" value="0"> All</option>);

						for (var key in field.select) {
							filterMultiOptions.push(
								<option key={key} value={key} >
									{field.select[key]}
								</option>
							)
						};
						filter = (
							<select
								multiple="true"
								// className="form-control"
								ref={ (input) => {
									inputValues[field.id] = input
								}}
								onChange = { () => {
									
									selectedItems = getSelectValues( inputValues[field.id] );

									if (selectedItems.indexOf("0") > -1) {

										deleteFilter(field.id);
										selectAllItems(inputValues[field.id]);
									} else {
	
										changeFilter({
											filteredColumn: field.id,
											filterType: SELECTOR_LIST_MULTI,
											filterValue: getSelectValues( inputValues[field.id] )
										})
									}
								}}
							>
								
								{ filterMultiOptions}
							</select>
						);
						break;

					
					default:
						filter = '';
				}

				// Push filter element
				tableFilters.push(
					<td key={field.id}> 
						{filter}
					</td>
				)
			} else {
				tableFilters.push(
					<td key={field.id}> 
						{''}
					</td>
				);
			}
		})
	}
	
	// Show Table Body
	for (var key in data) {
		tableRows.push( 
			<TableRow fields={fields} key={'TR' + key} data={data[key]} uncode={uncode} />
		)
	}

	return (
			<table id={tableId} className='table table-striped table-bordered'>
				<thead>
					<tr>
						{tableHeader}
					</tr>	
					<tr>
						{tableFilters}
					</tr>
				</thead>
				<tbody>
					{ tableRows }
				</tbody>
			</table>
	)
}

export default Table;