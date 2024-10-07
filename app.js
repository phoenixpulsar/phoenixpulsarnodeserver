const http = require('http')

http.createServer(function (req, res) {
  res.write("Response from Nodejs Server");
  res.end();
}

).listen(3000);

console.log('Node server started on port 3000');
