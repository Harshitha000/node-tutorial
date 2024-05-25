// How to access shared ones using require()
const names = require("./3-modules");
// console.log(names);
// console.log(names.john);
// console.log(names.peter);
const sayHi = require("./3ii-modules");
sayHi("Nani");

const data = require("./4-module-exports");
console.log(data);
