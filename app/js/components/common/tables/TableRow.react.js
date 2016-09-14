import React from 'react';

import TableCell from './TableCell.react';

export default class TableRow extends React.Component {

	render() {

		var tableCells  = [],

				data = this.props.data,
				uncode = this.props.uncode,
				fields = this.props.fields;

		for (var key in fields) {
			tableCells.push( 
				<TableCell key={ 'TC'+key} tdWidth={fields[key].width} data={data[fields[key].id]} uncode={uncode[fields[key].id]} />
			)
		}

		return (
			<tr>
				{ tableCells }
			</tr>
		)
	}
}
