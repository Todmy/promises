/**
 * Created by Todmy on 26.04.2015.
 */
var http = require('http'),
  url = require('url');

exports.start = function (route, handle) {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;

    route(handle, pathname, response);
  }).listen(8888);
}