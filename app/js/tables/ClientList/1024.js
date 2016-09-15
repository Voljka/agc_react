import { TEXT, SELECTOR_LIST, CHECKBOX, SELECTOR_LIST_MULTI, SELECTOR_LIST_MULTI_OPTIONAL } from '../../constants/filters'

module.exports = [
	{
		id: "name",
		title: 'Company',
		width: "150px",
		filterable: true,
		filtertype: TEXT,
		maxlength: 20
	},
	{
		id: "manager",
		title: 'Manager',
		width: "100px",
		filterable: true,
		filtertype: SELECTOR_LIST_MULTI_OPTIONAL,
		select: 'manager'
	},
	{
		id: "operator",
		title: 'Operator',
		width: "100px",
		filterable: true,
		filtertype: SELECTOR_LIST_MULTI_OPTIONAL,
		select: "oparator"
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
		filtertype: SELECTOR_LIST_MULTI_OPTIONAL,
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
		filtertype: SELECTOR_LIST_MULTI_OPTIONAL,
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
		defaultchecked: true,
		align: 'center'
	},
	{
		id: "dlf",
		title: 'DLF',
		width: "50px",
		filterable: true,
		filtertype: CHECKBOX,
		defaultchecked: true,
		align: 'center'
	},
	{
		id: "plf",
		title: 'PLF',
		width: "50px",
		filterable: true,
		filtertype: CHECKBOX,
		defaultchecked: true,
		align: 'center'
	},
	{
		id: "mf",
		title: 'MF',
		width: "50px",
		filterable: true,
		filtertype: CHECKBOX,
		defaultchecked: true,
		align: 'center'
	},
	{
		id: "address",
		title: 'ADDRESS',
		width: "200px",
		filterable: true,
		filtertype: TEXT,
		maxlength: 30
	}
]