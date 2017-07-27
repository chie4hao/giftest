const GIFEncoder = require('gifencoder');
var encoder = new GIFEncoder(854, 480);
var pngFileStream = require('png-file-stream');
var fs = require('fs');
const path = require('path');

// pngFileStream('node_modules/gifencoder/test/**/frame?.png').pipe(encoder.createWriteStream({ repeat: -1, delay: 500, quality: 10 }))
//   .pipe(fs.createWriteStream('myanimated.gif'));

const b = pngFileStream('node_modules/gifencoder/test/**/frame?.png');
const t = path.resolve(process.cwd(),'node_modules/gifencoder/test/**/frame?.png')
// console.log(b);