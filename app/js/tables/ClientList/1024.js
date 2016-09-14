import { TEXT, SELECTOR_LIST, CHECKBOX, SELECTOR_LIST_MULTI } from '../../constants/filters'

module.exports = [
	{
		id: "name",
		title: 'Company',
		width: "150px",
		filterable: true,
		filtertype: TEXT
	},
	{
		id: "manager",
		title: 'Manager',
		width: "75px",
		filterable: true,
		filtertype: TEXT
	},
	{
		id: "operator",
		title: 'Operator',
		width: "75px",
		filterable: true,
		filtertype: TEXT
	},
	{
		id: "group",
		title: 'Group',
		width: "100px",
		filterable: true,
		filtertype: TEXT
	},
	{
		id: "profileType",
		title: 'Profile',
		width: "100px",
		filterable: true,
		filtertype: SELECTOR_LIST,
		select: { 
			1: "Interior",
			2: "Exterior",
			3: "Int/Ext"
		}
	},
	{
		id: "shipmentPlace",
		title: 'Shipment',
		width: "100px",
		filterable: true,
		filtertype: SELECTOR_LIST_MULTI,
		select: {
			1: "Plant",
			2: "Warehose"
		}
	},
	{
		id: "sdlf",
		title: 'SDLF',
		width: "50px",
		filterable: true,
		filtertype: CHECKBOX,
		defaultchecked: true
	},
	{
		id: "dlf",
		title: 'DLF',
		width: "50px",
		filterable: true,
		filtertype: CHECKBOX,
		defaultchecked: true
	},
	{
		id: "plf",
		title: 'PLF',
		width: "50px",
		filterable: true,
		filtertype: CHECKBOX,
		defaultchecked: true
	},
	{
		id: "mf",
		title: 'MF',
		width: "50px",
		filterable: true,
		filtertype: CHECKBOX,
		defaultchecked: true
	},
	{
		id: "address",
		title: 'ADDRESS',
		width: "200px",
		filterable: true,
		filtertype: TEXT
	}
]