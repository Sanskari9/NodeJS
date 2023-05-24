const fs = require("fs");

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

console.log("I am first");
