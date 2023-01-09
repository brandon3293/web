console.log("Hello, World");
var fs = require("fs");
var data=fs.readFileSync('input.txt');
console.log(data.toString());

function sayHello(name){

}
const os=require('os');
const free=os.freemem();

const hostname=os.hostname();
const total=os.totalmem();
console.log(hostname);