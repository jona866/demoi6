// Create web server that can accept any request to any path on any port
// and responds with the same HTML file (e.g. index.html)

// Load modules
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (request, response) {
    // Write response
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // Read HTML file
    fs.readFile('index.html', function (err, contents) {
        // Check for errors
        if (err) {
            // Write error response
            response.writeHead(500);
            response.end();
        } else {
            // Write file contents to response
            response.end(contents);
        }
    });
    // Listen on port 8080
}).listen(8080, function () {
    console.log('Server running at http://localhost:8080/');
});