const http = require("http");

function requestHandler(req, res) {
  if (req.url === "/name") {
    res.statusCode = 200;
    res.end("<h1>Shyam Sandhya</h1>");
  } else if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Default fallback text</h1>");
  }
}

const server = http.createServer(requestHandler);
server.listen(8765);
