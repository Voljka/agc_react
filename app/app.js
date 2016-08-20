var React = require('react');
var ReactDOM = require('react-dom');
// var Page = require('./js/components/Page.react');
import Page from './js/components/Page.react';

ReactDOM.render(
	React.createElement(Page, null),
	document.getElementById('workspace')
);