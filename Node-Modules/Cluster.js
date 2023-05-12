// The cluster module is a built-in Node.js module that allows you to create child processes (worker processes) to handle incoming requests in a multi-threaded manner. This can help improve the performance and scalability of Node.js applications by taking advantage of multiple CPU cores.

// When you create a Node.js application using the cluster module, the master process spawns multiple worker processes that share the same server port. The master process listens for incoming requests and distributes them among the worker processes using a round-robin algorithm. Each worker process handles its own request and sends the response back to the client.

// Here is an example of how to use the cluster module in Node.js:

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork worker processes for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for when a worker process exits
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died`);
    // Restart the worker process if it exits unexpectedly
    cluster.fork();
  });
} else {
  // Worker processes can share any TCP connection
  // In this case, it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from worker process ' + process.pid + '\n');
  }).listen(3000);

  console.log(`Worker process ${process.pid} started`);
}
