// The util module in Node.js provides a set of utility functions for working with JavaScript objects and functions. These functions are designed to be lightweight and reusable, and they can be used to simplify many common programming tasks.

// Some of the common utilities provided by the util module include:

// util.format(): This function is used to format a string using placeholders. It works similarly to the printf function in C and other programming languages. Here is an example:

const util = require('util');
const message = util.format('Hello, %s!', 'world');
console.log(message); // Output: Hello, world!
