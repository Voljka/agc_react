import React from 'react'

import TableRow from './TableRow.react'

import { TEXT, SELECTOR_LIST, CHECKBOX, SELECTOR_LIST_MULTI } from '../../../constants/filters'

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

const Table = ({filter, list, fields, uncode, tableId, setData, changeFilter}) => {

	// let elems = []
	// for (var key in list) {
	// 	let el = list[key];
	// 	elems.push( <li key={key} onClick={()=> setData(el.name)} > {el.name}</li>);
	// }

	// return (
	// 	<ul>
	// 		{elems}
	// 	</ul>
	// )

	let data  = list;
	let inputValues = {};

	let tableRows = [],
		tableHeader = [],
		tableFilters = [];

	let filteredColumns = 0;
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
						let filterMultiOptions = [];
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
			// <input 
			// 	type="checkbox" 
			// 	onChange={() => {
			// 		changeFilter({
			// 			filteredColumn: 'shipmentPlace',
			// 			filterValue: 1,
			// 			filterType: CHECKBOX
			// 		})
			// 	}} 
			// />
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


// import React from 'react'

// import TableRow from './TableRow.react'

// import { TEXT, SELECTOR_LIST, CHECKBOX } from '../../../constants/filters'

// const Table = ({data, fields, uncode, changeFilter, tableId}) => {

// 	let inputValues = {};

// 	let tableRows = [],
// 		tableHeader = [],
// 		tableFilters = [];
// 		// data = this.props.data,
// 		// onChangeFilter = this.props.changeFilter,
// 		// selectable = this.props.selectable,
// 		// filterable = this.props.filterable,
// 		// uncode = this.props.uncode,
// 		// id = this.props.id,
// 		// fields = this.props.fields;

// 	let filteredColumns = 0;
// 	// Show Table Header
// 	fields.forEach( function(field) {
		
// 		if (field.filterable) {
// 			filteredColumns++;
// 		}

// 		tableHeader.push(
// 			<td key={field.id} width={field.width}> 
// 				{field.title}
// 			</td>
// 		);
// 	})

// 	// Show Table Filter Row
// 	if (filteredColumns > 0) {

// 		fields.forEach( function(field) {
			
// 			if (field.filterable) {
// 				// Make filter element
// 				let filter;
				
// 				switch (field.filtertype) {
// 					case TEXT: 
// 						filter = <input 
// 							type="search" 
// 							size='5' 
// 							maxLength='15' 
// 							ref={ (input) => {
// 								inputValues[field.id] = input
// 							}}
// 							onChange = { () => {
// 								changeFilter({
// 									filteredColumn: field.id,
// 									filterType: TEXT,
// 									filterValue: inputValues[field.id].value
// 								})
// 							}}
// 						/>;
// 						break;
					
// 					case CHECKBOX: 
// 						filter = <input 
// 							type='checkbox' 
// 							ref={ (input) => {
// 								inputValues[field.id] = input
// 							}}
// 							onChange = { () => {
// 								changeFilter({
// 									filteredColumn: field.id,
// 									filterType: CHECKBOX,
// 									filterValue: inputValues[field.id].checked ? 1 : 0
// 								})
// 							}}
// 						/>;
// 						break;
					
// 					case SELECTOR_LIST: 
// 						let filterOptions = [];
// 						for (var key in field.select) {
// 							filterOptions.push(
// 								<option key={key} value={key} >
// 									{field.select[key]}
// 								</option>
// 							)
// 						};
// 						filter = (
// 							<select
// 								ref={ (input) => {
// 									inputValues[field.id] = input
// 								}}
// 								onChange = { () => {
// 									changeFilter({
// 										filteredColumn: field.id,
// 										filterType: SELECTOR_LIST,
// 										filterValue: inputValues[field.id].value
// 									})
// 								}}
// 							>
// 								{ filterOptions}
// 							</select>
// 						);
// 						break;
					
// 					default:
// 						filter = '';
// 				}

// 				// Push filter element
// 				tableFilters.push(
// 					<td key={field.id}> 
// 						{filter}
// 					</td>
// 				)
// 			} else {
// 				tableFilters.push(
// 					<td key={field.id}> 
// 						{''}
// 					</td>
// 				);
// 			}
// 		})
// 	}

// 	// Show Table Body
// 	for (var key in data) {
// 		tableRows.push( 
// 			<TableRow fields={fields} key={'TR' + key} data={data[key]} uncode={uncode} />
// 		)
// 	}
// 	// console.log(data);

// 	return (
// 		<table id={tableId} className='table table-striped table-bordered'>
// 			<thead>
// 				<tr>
// 					{tableHeader}
// 				</tr>	
// 				<tr>
// 					{tableFilters}
// 				</tr>
// 			</thead>
// 			<tbody>
// 				{ tableRows }
// 			</tbody>
// 		</table>
// 	)
// }

// export default Table;






































// class Table extends React.Component {

// 	render() {

// 		let inputValues = {};

// 		let tableRows = [],
// 			tableHeader = [],
// 			tableFilters = [],
// 			data = this.props.data,
// 			onChangeFilter = this.props.changeFilter,
// 			// selectable = this.props.selectable,
// 			// filterable = this.props.filterable,
// 			uncode = this.props.uncode,
// 			// id = this.props.id,
// 			fields = this.props.fields;

// 		let filteredColumns = 0;
// 		// Show Table Header
// 		fields.forEach( function(field) {
			
// 			if (field.filterable) {
// 				filteredColumns++;
// 			}

// 			tableHeader.push(
// 				<td key={field.id} width={field.width}> 
// 					{field.title}
// 				</td>
// 			);
// 		})

// 		// Show Table Filter Row
// 		if (filteredColumns > 0) {

// 			fields.forEach( function(field) {
				
// 				if (field.filterable) {
// 					// Make filter element
// 					let filter;
					
// 					switch (field.filtertype) {
// 						case TEXT: 
// 							filter = <input 
// 								type="search" 
// 								size='5' 
// 								maxLength='15' 
// 								ref={ (input) => {
// 									inputValues[field.id] = input
// 								}}
// 								onChange = { () => {
// 									onChangeFilter({
// 										filteredColumn: field.id,
// 										filterType: TEXT,
// 										filterValue: inputValues[field.id].value
// 									})
// 								}}
// 							/>;
// 							break;
						
// 						case CHECKBOX: 
// 							filter = <input 
// 								type='checkbox' 
// 								ref={ (input) => {
// 									inputValues[field.id] = input
// 								}}
// 								onChange = { () => {
// 									onChangeFilter({
// 										filteredColumn: field.id,
// 										filterType: CHECKBOX,
// 										filterValue: inputValues[field.id].checked ? 1 : 0
// 									})
// 								}}
// 							/>;
// 							break;
						
// 						case SELECTOR_LIST: 
// 							let filterOptions = [];
// 							for (var key in field.select) {
// 								filterOptions.push(
// 									<option key={key} value={key} >
// 										{field.select[key]}
// 									</option>
// 								)
// 							};
// 							filter = (
// 								<select
// 									ref={ (input) => {
// 										inputValues[field.id] = input
// 									}}
// 									onChange = { () => {
// 										onChangeFilter({
// 											filteredColumn: field.id,
// 											filterType: SELECTOR_LIST,
// 											filterValue: inputValues[field.id].value
// 										})
// 									}}
// 								>
// 									{ filterOptions}
// 								</select>
// 							);
// 							break;
						
// 						default:
// 							filter = '';
// 					}

// 					// Push filter element
// 					tableFilters.push(
// 						<td key={field.id}> 
// 							{filter}
// 						</td>
// 					)
// 				} else {
// 					tableFilters.push(
// 						<td key={field.id}> 
// 							{''}
// 						</td>
// 					);
// 				}
// 			})
// 		}

// 		// Show Table Body
// 		for (var key in data) {
// 			tableRows.push( 
// 				<TableRow fields={fields} key={'TR' + key} data={data[key]} uncode={uncode} />
// 			)
// 		}
// 		// console.log(data);

// 		return (
// 			<table id={this.props.id} className='table table-striped table-bordered'>
// 				<thead>
// 					<tr>
// 						{tableHeader}
// 					</tr>	
// 					<tr>
// 						{tableFilters}
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{ tableRows }
// 				</tbody>
// 			</table>
// 		)
// 	}
// }

// export default Table;































// 	let tableHeader = [];
// 	let filteredColumns = 0;
	
// 	grouplistTableFields.forEach( function(field) {

// 		if (field.filterable) {
// 			filteredColumns++;
// 		}

// 		tableHeader.push(
// 			<td key={field.id} width={field.width}> 
// 				{field.title}
// 			</td>
// 		);
// 	})

// 	return (
// 		<table id="MyTable" className='table table-striped table-bordered'>
// 			<thead>
// 				<tr>
// 					{tableHeader}
// 				</tr>	
// 			</thead>
// 		</table>
// 	)
// }

// export default class Table extends React.Component {

// 	render() {

// 		let curState = {};

// 		var tableRows = [],
// 				tableHeader = [],

// 				data = this.props.data,
// 				selectable = this.props.selectable,
// 				filterable = this.props.filterable,
// 				uncode = this.props.uncode,
// 				id = this.props.id,
// 				fields = this.props.fields;

// 		let filteredColumns = 0;
// 		// Show Table Header
// 		fields.forEach( function(field) {
			
// 			if (field.filterable) {
// 				filteredColumns++;
// 			}

// 			tableHeader.push(
// 				<td key={field.id} width={field.width}> 
// 					{field.title}
// 				</td>
// 			);
// 		})

// 		// Show Table FilterString
// 		let tableFilters = [];

// 		if (filteredColumns > 0) {

// 			fields.forEach( function(field) {
				
// 				if (field.filterable) {
// 					// Make filter element
// 					let filter;
					
// 					switch (field.filtertype) {
// 						case TEXT: 
// 							filter = <input 
// 								type="search" 
// 								size='5' 
// 								maxLength='15' 
// 								ref={ (c) => {
// 									this._input = c
// 									// curState[field.id] = { 
// 									// 	filteredColumn: field.id,
// 									// 	filterType: TEXT,
// 									// 	filterValue: input
// 									// };
// 								}}
// 								onChange = {() => {

// 									dispatch({
// 										type: 'CHANGE_FILTER',
// 										filteredColumn: field.id,
// 										filterType: TEXT,
// 										filterValue: input
// 									})
// 									// console.log('filterChanged. CurrentState: ');
// 									// console.log(curState);
// 									// for (var key in curState) {
// 									// 	console.log(key + ': '+curState[key].value);
// 									// }
// 								}}
// 							/>;
// 							break;
// 						case CHECKBOX: 
// 							filter = <input type='checkbox' />;
// 							break;
// 						case SELECTOR_LIST: 
// 							let filterOptions = [];
// 							for (var key in field.select) {
// 								filterOptions.push(
// 									<option key={key} value={key} >
// 										{field.select[key]}
// 									</option>
// 								)
// 							};
// 							filter = (
// 								<select>
// 									{ filterOptions}
// 								</select>
// 							);
// 							break;
// 						default:
// 							filter = '';
// 					}

// 					// Push filter element
// 					tableFilters.push(
// 						<td key={field.id}> 
// 							{filter}
// 						</td>
// 					)
// 				} else {
// 					tableFilters.push(
// 						<td key={field.id}> 
// 							{''}
// 						</td>
// 					);
// 				}
// 			})
// 		}

// 		// Show Table Body
// 		for (var key in data) {
// 			tableRows.push( 
// 				<TableRow fields={fields} key={'TR' + key} data={data[key]} uncode={uncode} />
// 			)
// 		}

// 		return (
// 			<table id={id} className='table table-striped table-bordered'>
// 				<thead>
// 					<tr>
// 						{tableHeader}
// 					</tr>	
// 					<tr>
// 						{tableFilters}
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{ tableRows }
// 				</tbody>
// 			</table>
// 		)
// 	}
// }