/**
 * Created by Todmy on 26.04.2015.
 */
exports.route = function (handle, pathname, response) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
};