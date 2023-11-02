var moment = require("moment");
// var math = require("mathjs");

console.log("Hello World!");
var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var locales = moment().format("LLL");
console.log(locales);

var name = "Mario";
var time = "this evening";
console.log(`Hello ${name}, how are you ${time}?`);

var relativetime = moment("20111031", "YYYYMMDD").fromNow();
console.log(relativetime);

// import { sum, pi } from "lib/math";
// console.log("2π = " + sum(pi, pi));
