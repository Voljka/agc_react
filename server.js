var express = require('express');
var app = express();

var port     = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var logger   = require('morgan');
var path = require('path');
var fs = require('fs');

// prepare server


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var accessLogStream = fs.createWriteStream(__dirname + '/log/access.log',{flags: 'a'});

console.info('env: ' + app.get('env'));
console.info('APP_ENV: ' + app.get('APP_ENV'));
console.info('ENV: ' + app.get('ENV'));

if (app.get('env') == 'production') {
  app.use(logger('combined', { /*skip: function(req, res) { return res.statusCode < 400 },*/ stream: accessLogStream }));
} else {
  app.use(logger('dev'));
}

var api = require('./api')
app.use('/api/v1', api); // redirect API calls

app.use('/', express.static(__dirname + '/dist')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
}); // initial HTML file

app.listen(port);
console.info('Server listening on port: ' + port);