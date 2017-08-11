var jsonServer = require('json-server');

// return an express server
var server = jsonServer.create();

// set default middlewares (logger, static, cors, no-cache)
server.use(jsonServer.defaults());

var router = jsonServer.router('db.json');
server.use(router);

console.log('Listening at 4444');
server.listen(4444);