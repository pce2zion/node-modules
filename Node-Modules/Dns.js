// The dns module in Node.js provides functionality to resolve domain names and IP addresses. It allows you to perform DNS (Domain Name System) lookups and other related operations in a Node.js application.

// The dns module provides several functions to resolve DNS records, such as:

// dns.lookup(): This function resolves a hostname (string) into the first IP address it finds.
// dns.resolve(): This function resolves a hostname (string) into an array of IP addresses (string).
// dns.reverse(): This function resolves an IP address (string) into an array of hostnames (string).
// Here's an example of how to use the dns.lookup() function to resolve a domain name:

const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
  if (err) throw err;
  console.log(`IP address: ${address}, family: IPv${family}`);
});
