const http = require("http");

// request and response are objects
const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.write("Welcome to our home page");
  //   res.end();
  if (req.url === "/") {
    res.end("Welcome to out home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  } else
    res.end(`
          <h1>Oops!</h1>
          <p>We can't seem to find the page you are looking for</p>
          <a href="/">Back to Home</a>
      `);
});
server.listen(5000);
