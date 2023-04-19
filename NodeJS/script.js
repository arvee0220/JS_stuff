// const {largeNumber, smallNumber} = require("./script2.js");
// import { largeNumber, smallNumber } from "./script2.js";
// import c from "fs"
// import d from "http"

import { largeNumber } from "./script2.js";

// const a = smallNumber;
// const b = 5;
// const c = largeNumber;
let a;
if (1 === 1) {
    const { largeNumber } = await import("./script2.js");
    a = largeNumber;
}

const b = 7;

// console.log(__dirname); // shows the current directory where cli is opened.

console.log(a, b);

// ES2020
// globalThis === window; // true

// ES6 module
// https://nodejs.org/api/packages.html#type
