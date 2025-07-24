// 1- import http module
const http = require("http");

// 2- create server
const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === "GET" && url === "/welcome") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome to the basic HTTP server!" }));
  }

  else if (method === "POST" && url === "/data") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const parsed = JSON.parse(body);
      const { name, age } = parsed;
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: `Hello ${name}, your age is ${age}` }));
    });
  }

  else {
    res.end();
  }
});

// 3- Listen
server.listen(1000, () => {
  console.log("Hello Sara, your age is 25");
});
