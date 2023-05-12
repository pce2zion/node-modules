// The http module is a built-in module in Node.js that provides functionality for creating and interacting with HTTP servers and clients. It allows developers to create web servers and make HTTP requests to other servers. The module provides a number of methods and properties for handling HTTP requests and responses.

// Here's an example of how to use the http module to create a simple HTTP server in Node.js:

const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');
  
  // Write the response body
  res.write('<h1>Hello World!</h1>');
  
  // End the response
  res.end();
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
