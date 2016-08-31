import React from 'react'

import TableRow from './TableRow.react'

export default class Table extends React.Component {

	render() {

		var tableRows = [],
				tableHeader = [],

				data = this.props.data,
				selectable = this.props.selectable,
				filterable = this.props.filterable,
				uncode = this.props.uncode,
				id = this.props.id,
				fields = this.props.fields;

		for (var key in fields) {
			tableHeader.push(
				<td key={fields[key].title}> 
					{fields[key].title}
				</td>
			)
		}

		for (var key in data) {
			tableRows.push( 
				<TableRow key={'TR' + key} data={data[key]} uncode={uncode} />
			)
		}

		return (
			<table id={id} className='table'>
				<thead>
					<tr>
						{tableHeader}
					</tr>	
				</thead>
				<tbody>
					{ tableRows }
				</tbody>
			</table>
		)
	}
}