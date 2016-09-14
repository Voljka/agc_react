import React from 'react';

// import Table from './common/tables/Table.react';
import GroupList from '../containers/GroupList';

class ClientsList extends React.Component {
	
	constructor() {
		super(); 
		this.state = {
			grouplist: []
		}
	}

	componentDidMount() {
		
		this.serverRequest = $.get('http://localhost:8080/api/v1/groups', function (result) {
		  	this.setState({
		    	grouplist: result
		  	});
		}.bind(this));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	render() {

		// var yesNo = {
		// 	0: 'V',
		// 	1: ''
		// }

		// var workersDirectory = {
		// 	1: 'Kozharin',
		// 	2: 'Kulikova',
		// 	3: 'Zhosan'
		// }

		// // var shipmentsDirectory = {
		// // 	1: 'Plant',
		// // 	2: 'Warehose'
		// // }

		// // var profileTypesDirectory = {
		// // 	1: "Interior",
		// // 	2: 'Exterior',
		// // 	3: 'Int/Ext'
		// // }

		// var uncode = 	{
		// 		manager: workersDirectory,
		// 		operator: workersDirectory,
		// 		// shipmentPlace: shipmentsDirectory,
		// 		// profileType: profileTypesDirectory,
		// 		plf: yesNo,
		// 		dlf: yesNo,
		// 		mf: yesNo,
		// 		sdlf: yesNo
		// }


		// return (
		// 	<div className='container'>
		// 		<Table 
		// 			id="ClientsList"
		// 			data={this.state.grouplist} 
		// 			filterable={false}
		// 			selectable={true}
		// 			uncode = {uncode}
		// 			fields = {fields}
		// 		/>
		// 	</div>
		// )

		return (
			<div className='container'>
				<GroupList />
			</div>
		)

	}
}

export default ClientsList;


				// <Table 
				// 	className="table" 
				// 	id="table" 
				// 	data={[
				//     { Name: 'Lee Salminen', Age: '23', Position: 'Programmer'},
				//     { Name: 'Griffin Smith', Age: '18', Position: 'Engineer'},
				//     { Name: 'Ian Zhang', Age: '28', Position: 'Developer'}
				// 	]}
				// 	sortable={[
				//     {
				//         column: 'Name',
				//         sortFunction: function(a, b){
				//             // Sort by last name
				//             var nameA = a.split(' ');
				//             var nameB = b.split(' ');

				//             return nameA[1].localeCompare(nameB[1]);
				//         }
				//     },
				//     'Age',
				//     'Position'
				// 	]}
				// 	defaultSort={{
				// 		column: 'Age', 
				// 		direction: 'desc'
				// 	}} />


				// <Table className="table" id="table" data={[
				//     {'State': 'New York', 'Description': 'this is some text', 'Tag': 'new'},
				//     {'State': 'New Mexico', 'Description': 'lorem ipsum', 'Tag': 'old'},
				//     {'State': 'Colorado',
				//      'Description': 'new description that shouldn\'t match filter',
				//      'Tag': 'old'},
				//     {'State': 'Alaska', 'Description': 'bacon', 'Tag': 'renewed'},
				// ]}
				// filterable={[
				//     {
				//         column: 'State',
				//         filterFunction: function(contents, filter) {
				//             // case-sensitive filtering
				//             return (contents.indexOf(filter) > -1);
				//         }
				//     },
				//     'Tag'
				// ]} />

	// var products = [
	// 		{id: 1, name: 'apples', quality: 0, inStock: 1},
	// 		{id: 2, name: 'bananas', quality: 1, inStock: 1},
	// 		{id: 3, name: 'melon', quality: 0, inStock: 0},
	// 		{id: 4, name: 'watermelon', quality: 2, inStock: 1}
	// 	];

	// 	var cellEditProp = {
	// 	  mode: "click",
	// 	  blurToSave: true
	// 	};

	// 	// validator function pass the user input value and should return true|false.
	// 	function jobNameValidator(value){
	// 	  if(!value){
	// 	    return 'Job Name is required!'
	// 	  }else if(value.length<10){
	// 	    return 'Job Name length must great 10 char'
	// 	  }
	// 	  return true;
	// 	}

	// 	var qualityType = {
	// 	    0: "good",
	// 	    1: "bad",
	// 	    2: "unknown"
	// 	};

	// 	var qualityTypes = {
	// 	    "good": 0,
	// 	    "bad" : 1,
	// 	    "unknown" : 2
	// 	};

	// 	var inStockStatus = {
	// 	    1: "yes",
	// 	    2: "no"
	// 	};

	// 	function enumFormatter(cell, row, enumObject){
	// 	    return enumObject[cell];
	// 	}

	// 	return (
	// 		<div>

 //            <BootstrapTable data={products} cellEdit={cellEditProp} insertRow={true}>
 //                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
 //                <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
 //                <TableHeaderColumn dataField="quality" editable={{type:'select', options:{values:qualityTypes}}} dataSort={true} dataFormat={enumFormatter} formatExtraData={qualityType}>Product Quality</TableHeaderColumn>
 //                <TableHeaderColumn dataField="inStock" editable={{type:'checkbox', options:{values:'1:0'}}} dataFormat={enumFormatter} formatExtraData={inStockStatus}>Product Stock Status</TableHeaderColumn>
 //            </BootstrapTable>
	// 		</div>
	// 	)
