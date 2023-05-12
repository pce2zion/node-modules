// The fs module is a built-in Node.js module that provides an API for interacting with the file system. It allows Node.js applications to read, write, and manipulate files and directories on the local file system.

// Here is an example of how the fs module can be used in Node.js to read the contents of a file:

const fs = require('fs');

// Read contents of a file asynchronously
fs.readFile('/path/to/file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Read contents of a file synchronously
try {
  const data = fs.readFileSync('/path/to/file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
