var http = require("http");

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello Word\n");
})

server.listen(7000);

console.log("Server running at http://localhost:7000/");


