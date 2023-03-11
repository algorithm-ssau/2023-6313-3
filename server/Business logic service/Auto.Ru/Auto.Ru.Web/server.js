var http = require('http');
var port = process.env.PORT || 1337;
var app = require('./app');

http.createServer(app).listen(port);
