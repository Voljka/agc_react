var React = require('react');
var ReactDOM = require('react-dom');
var fs = require('fs');
var YAML = require('yamljs');

import getCorrectI18nFile from './js/lib/i18n/i18n';

var _i18n = getCorrectI18nFile();

import Page from './js/components/Page.react';

ReactDOM.render(
	React.createElement(Page, null),
	document.getElementById('workspace')
);