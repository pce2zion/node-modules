// The stream module provides a powerful and flexible way to work with data streams in Node.js. A stream is an abstract interface for working with data that can be read from or written to over time. Streams can be used to process large amounts of data without having to load everything into memory at once, making them ideal for working with files, network connections, and other types of data that can be too large to fit into memory all at once.

// Here's an example of how to use the stream module in Node.js to read data from a file and write it to the console:

const fs = require('fs');
const stream = fs.createReadStream('example.txt');

stream.on('data', (chunk) => {
  console.log(chunk.toString());
});

stream.on('end', () => {
  console.log('Finished reading file.');
});
