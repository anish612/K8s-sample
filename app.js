const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Kubernetes!, Welcome to the sample application of Anish Dhiman');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
