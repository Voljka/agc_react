import React from 'react';

import TableCell from './TableCell.react';

export default class TableRow extends React.Component {

	render() {

		var tableCells  = [],

				data = this.props.data,
				uncode = this.props.uncode;

		for (var key in data) {
			// tableCells.push( <td key={('TD' + key)}> {data[key]} </td>)

			var ind = key;

			tableCells.push( 
				<TableCell key={ 'TC'+key} data={data[key]} uncode={uncode[key]} />
			)
		}

		return (
			<tr>
				{ tableCells }
			</tr>
		)
	}
}
