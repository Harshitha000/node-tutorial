//]CommonJS, every file is module(by default)
// Modules- Encapsulated Code(only share minimum)
// In case of modules we are in charge of what we are sharing

console.log(module);
// module is an object which has exports

// Example
// local to module
const secret = "SUPER SECRET";
// share with the app
const john = "john";
const peter = "peter";
// how to share
// sharing as an object
module.exports = { john, peter };
