// In Node.js, the path module is a built-in module that provides utilities for working with file and directory paths. It is used to handle file system paths in a cross-platform way, which is useful when working on different operating systems.

// The path module provides a number of methods for working with paths, such as path.join(), path.resolve(), path.dirname(), path.basename(), and path.extname(). Here's a brief explanation of some of these methods:

// path.join([...paths]): Joins all the path segments together, using the platform-specific separator as a delimiter.

// path.resolve([...paths]): Resolves a sequence of paths or path segments into an absolute path.

// path.dirname(path): Returns the directory name of a path.

// path.basename(path, [ext]): Returns the last portion of a path, optionally removing a file extension.

// path.extname(path): Returns the file extension of a path.

// Here's an example that demonstrates the use of the path module to work with file paths:


const path = require('path');

const filePath = '/path/to/file.txt';
const dirName = path.dirname(filePath);
const baseName = path.basename(filePath);
const extName = path.extname(filePath);

console.log(`Directory name: ${dirName}`);
console.log(`Base name: ${baseName}`);
console.log(`Extension name: ${extName}`);
