/**
 * Created by Todmy on 26.04.2015.
 */
var server = require('./server'),
  router = require('./router'),
  requestHandlers = require("./request-handlers");


var handle ={};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/favicon.ico'] = requestHandlers.na;

server.start(router.route, handle);