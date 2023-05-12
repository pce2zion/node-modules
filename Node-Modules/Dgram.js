// The dgram module in Node.js provides an implementation of the Datagram (UDP) socket networking protocol. It allows Node.js applications to send and receive UDP datagrams, which are packets of data that can be sent over a network without establishing a dedicated connection. The dgram module provides a simple and efficient way to send and receive datagrams in Node.js.

// Here is an example of how the dgram module can be used in Node.js:

const dgram = require('dgram');

// Create a UDP socket
const socket = dgram.createSocket('udp4');

// Bind the socket to a specific port and address
socket.bind(3000, 'localhost', () => {
  console.log('Socket is listening');
});

// Send a message as a UDP datagram
const message = Buffer.from('Hello, server!');
socket.send(message, 3000, 'localhost', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Message sent');
  }
});

// Handle incoming UDP datagrams
socket.on('message', (msg, rinfo) => {
  console.log(`Received message: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
