var http = require('http'); //loads the http module

http.createServer(function (req, res) {
  // 1. Tell the broswer everything í OK (status code 200), and the data is in plain text
  res.writeHead(200, {'Content-Type': 'text/html'});
  //2. Write the announced text to the body of the page
  res.write("hello world!")
  // 3. Tell the server that all of the response headers and body have been sent
  res.end();
}).listen(8080); // 4. Tells the server what port to be on 