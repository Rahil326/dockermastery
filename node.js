// Import required modules
const http = require('http');

// Define the port to listen on
const PORT = 8080;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Docker!\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
