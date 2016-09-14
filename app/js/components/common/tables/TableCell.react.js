import React from 'react';

export default class TableCell extends React.Component {
	render(){
		
		var uncode = this.props.uncode,
			data = this.props.data,
			tdWidth = this.props.tdWidth;

		let content;
		content = data;

		if (uncode) {
			content = uncode[data];
		}

		return (
			<td width={tdWidth}>
				{content}
			</td>
		)
	}
}