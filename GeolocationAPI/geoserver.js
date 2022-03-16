

// including libraries
var http = require('http');
var static = require('node-static');
var app = http.createServer(handler);
var io = require('socket.io').listen(app);

// defining port
var port = 8080;

// making html, js & css files accessible
var files = new static.Server('./public');

// serving files on request
function handler(request, response) {
	request.addListener('end', function() {
		files.serve(request, response);
	});
}

// listening for incoming connections from client
io.sockets.on('connection', function (socket) {

  //listening for coords
  socket.on('send:coords', function (data) {

  	// broadcasting the coordinates to everyone.
  	socket.broadcast.emit('load:coords', data);
  });
});

// starts displaying the geolocation on specified port
app.listen(port);
console.log('The server goes on localhost:' + port);