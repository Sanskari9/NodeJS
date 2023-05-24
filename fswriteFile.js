const fs = require("fs");

// fs.writeFile("./sample.txt","This is written by me",()=>{
//     console.log("written");
// })
const a = "This is written by frontend Developer" ;

fs.writeFileSync("./sample.txt",a,()=>{
    console.log("written");
})

console.log("I am first");