// The "os" (operating system) module in Node.js provides a way to interact with the operating system on which Node.js is running. It provides various methods to get information about the system such as CPU architecture, amount of free memory, and operating system type.

// Here's an example of how to use the "os" module in a Node.js script:

const os = require('os');

console.log('Hostname: ' + os.hostname());  // prints the hostname of the system
console.log('OS Type: ' + os.type());  // prints the type of the operating system
console.log('Total Memory: ' + os.totalmem() + ' bytes');  // prints the total amount of memory in the system
console.log('CPU Architecture: ' + os.arch());  // prints the CPU architecture of the system
