// The readline module in Node.js provides an interface for reading lines of input from a readable stream (such as process.stdin), which is useful for creating command-line interfaces and interactive prompts.

// Here is an example of how to use the readline module in Node.js:

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
