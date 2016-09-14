var transformer = function(data) {
	return {
		id: data.group_id,
		name: data.group_name,
		manager: data.manager,
		operator: data.goz,
		address: data.post,
		shipmentPlace: data.type1,
		profileType: data.type2,
		plf: data.plf,
		dlf: data.dlf,
		mf: data.mf,
		sdlf: data.sdlf,
		group: data.siblings
	}
}

module.exports = transformer