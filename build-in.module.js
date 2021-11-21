const os = require("os");
const path = require("path");
const fs = require("fs");
const http = require("http");

const user = os.userInfo();

console.log(user);

console.log(path.basename("hdsfd/dfdgfg/utils"));

const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");

console.log(first, second);

fs.writeFileSync("./content/result.txt", `Result file: ${first} ${second}`);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
  }
});
server.listen(5000);
