var fs = require('fs');
var path = require('path');
var stylus = require('stylus');

files = ['stylus/base.styl', 'stylus/vars.styl'];

files.forEach(function(v, k, a) {

  file = fs.readFileSync(v, 'utf8');
  console.log(v)
  stylus(file)
  .set('filename', __dirname + '/' + v)
  .render(function(err, css) {
    console.log(err, css);
  });
});
