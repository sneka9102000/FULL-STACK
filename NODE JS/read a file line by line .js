var readline = require('readline');
var fs = require('fs');

var file= readline.createInterface({
  input: fs.createReadStream('demo.html')
});

var lineno = 0;
file.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});
