var http = require("http");
const port = process.env.PORT || 1337;

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello TravisTest Example!\n");
  })
  .listen(1337, "0.0.0.0");

console.log(`Server running at http://127.0.0.1:${port}/`);
