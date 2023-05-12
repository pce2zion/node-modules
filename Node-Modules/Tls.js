// The TLS (Transport Layer Security) module in Node.js is used to create secure network connections over a network. It provides an implementation of the SSL/TLS protocol that allows for encryption and decryption of data sent between a client and a server.

// Here's an example of how to use the TLS module in Node.js:

const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
  ca: fs.readFileSync('client-cert.pem'),
  requestCert: true,
  rejectUnauthorized: true
};

const server = tls.createServer(options, (socket) => {
  console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('welcome!\n');
  socket.setEncoding('utf8');
  socket.pipe(socket);
});

server.listen(8000, () => {
  console.log('server listening on port 8000');
});
