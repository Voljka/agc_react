var YAML = require('yamljs');

function getUserRights( role ) {
	var _allRights = YAML.load('rights.yaml');
	role = role || 5
	return _allRights[role]
}

export default getUserRights;