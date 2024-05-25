// npm Node Package Manager
//  npm enables us to do three things
// 1.Reuse our code in other project
// 2.Use code written by other developers
// 3.Share our own solutions with other developers
// package, modules, dependency

// npm - global command, comes along with node
// npm --version (or) npm --v

// local dependency - use it only in the particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores imp info abt project/package)
// Manual approach (Create package.json in the root, create properties e.t.c)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) -->best approach

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
