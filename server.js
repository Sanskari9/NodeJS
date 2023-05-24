const http = require("http")
const fs = require("fs");

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./home.html","utf-8")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        return res.end(home);
    }
    if(req.url === "/about"){
        return res.end("<h1>About Page</h1>")
    }else{
        return res.end("<h1>404 Page not found</h1>")
    }
});

server.listen(PORT,hostname,()=>{
    console.log(`Server is running on localhost http://${hostname}:${PORT}`);
})