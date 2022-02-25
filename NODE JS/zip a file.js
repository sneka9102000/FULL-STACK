var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('./demofile.txt');
var w = fs.createWriteStream('./demogzipfile.txt.gz');
r.pipe(gzip).pipe(w);
