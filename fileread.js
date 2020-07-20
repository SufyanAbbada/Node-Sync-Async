const fs = require("fs");

console.clear();
console.log("Going to Read Data");
//The same call but using 'fs.readFileSync' is a synchronous call and it blocks the thread and thats not feasible.
let using = fs.readFile("sometext.txt", "utf8", (error, data) => {
  console.log(data);
});
console.log("Data Read!");
