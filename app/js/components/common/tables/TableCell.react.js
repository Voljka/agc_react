import React from 'react';

export default class TableCell extends React.Component {
	render(){
		
		var uncode = this.props.uncode,
				data = this.props.data;

		if (uncode) {
			data = uncode[data];
		}

		return (
			<td>
				{data}
			</td>
		)
	}
}