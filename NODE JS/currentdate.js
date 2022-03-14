var http = require('http');
var currDate = require('./currDateTime');

http.createServer(function (req, res) {
  res.write("The current date and time : " + currDate.dateTimefunc());
  res.end();
}).listen(8080); 