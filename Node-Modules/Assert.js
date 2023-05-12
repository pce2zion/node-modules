// The assert module in Node.js is a built-in module that provides a set of functions to write unit tests for your Node.js applications. The assert module provides a way to test the expected behavior of functions and methods in your code, and it throws an error if the expectation is not met.

// Here is an example of how to use the assert module in Node.js:

const assert = require('assert');

function addNumbers(a, b) {
  return a + b;
}

// Test the addNumbers() function
assert.equal(addNumbers(2, 3), 5, 'Expected addNumbers(2, 3) to equal 5');
assert.equal(addNumbers(2, -3), -1, 'Expected addNumbers(2, -3) to equal -1');
