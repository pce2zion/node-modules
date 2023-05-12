// The url module in Node.js provides utilities for URL parsing and manipulation. It can be used to parse a URL string into its component parts, or to create a new URL by combining individual components.

// Here is an example of how to use the url module in Node.js:

const url = require('url');

// Parse a URL string
const myUrl = 'https://www.example.com/path?foo=bar';
const parsedUrl = url.parse(myUrl);

console.log(parsedUrl);
// Output:
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.example.com',
//   port: null,
//   hostname: 'www.example.com',
//   hash: null,
//   search: '?foo=bar',
//   query: 'foo=bar',
//   pathname: '/path',
//   path: '/path?foo=bar',
//   href: 'https://www.example.com/path?foo=bar'
// }

// Create a new URL from individual components
const baseUrl = 'https://www.example.com';
const path = '/new/path';
const queryParams = { foo: 'bar', baz: 'qux' };

const newUrl = url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: '/new/path',
  query: queryParams
});

console.log(newUrl);
// Output: https://www.example.com/new/path?foo=bar&baz=qux
