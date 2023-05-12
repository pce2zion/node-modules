// The Crypto node module in Node.js is a built-in module that provides cryptographic functionality to perform various cryptographic operations such as encryption, decryption, hashing, and digital signatures.

// The Crypto module contains various sub-modules, each implementing different cryptographic algorithms. Some of the sub-modules available in the Crypto module include:

// Cipher: provides encryption and decryption functionality
// Hash: provides hashing functionality
// Hmac: provides Hash-based Message Authentication Code (HMAC) functionality
// DiffieHellman: provides a way to perform key exchange between parties using the Diffie-Hellman algorithm
// Sign: provides digital signature functionality
// Verify: provides verification of digital signatures functionality

// Here's an example of how the Crypto module can be used to generate a SHA256 hash of a string:

import { createHash } from 'crypto';

const myString = 'Hello, world!';

// Create a SHA256 hash object
const hash = createHash('sha256');

// Update the hash object with the string data
hash.update(myString);

// Generate the hashed output in hexadecimal format
const hashedOutput = hash.digest('hex');

console.log(hashedOutput); // Output: 2ef7bde608ce5404e97d5f042f95f89f1c232871dfccf6f6dacf6dcc5f8b1956
