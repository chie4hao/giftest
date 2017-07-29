const GIFEncoder = require('gifencoder');
var encoder = new GIFEncoder(854, 480);
var pngFileStream = require('png-file-stream');
var fs = require('fs');
const path = require('path');
const through2 = require('through2');
const png = require('png-js');

// pngFileStream('node_modules/gifencoder/test/**/frame?.png')
//   .pipe(encoder.createWriteStream({ repeat: -1, delay: 500, quality: 10 }))
//   .pipe(fs.createWriteStream('myanimated.gif'));

// const b = pngFileStream('node_modules/gifencoder/test/**/frame?.png');
// const t = path.resolve(process.cwd(), 'node_modules/gifencoder/test/**/frame?.png');

var stream = through2({ objectMode: true });
stream.write('c:\\Users\\hasee\\Documents\\GitHub\\giftest\\node_modules\\gifencoder\\test\\fixtures\\frame0.png');
stream.write('c:\\Users\\hasee\\Documents\\GitHub\\giftest\\node_modules\\gifencoder\\test\\fixtures\\frame1.png');
stream.write('c:\\Users\\hasee\\Documents\\GitHub\\giftest\\node_modules\\gifencoder\\test\\fixtures\\frame2.png');
stream.end();

stream.pipe(through2({ objectMode: true }, function (chunk, enc, next) {
  console.log(chunk);
  const self = this;
  png.decode(chunk, function (pixels) {
    self.push(pixels);
    next();
  });
})).pipe(encoder.createWriteStream({ repeat: -1, delay: 500, quality: 10 }))
  .pipe(fs.createWriteStream('myanimated.gif'));
