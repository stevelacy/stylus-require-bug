var gulp = require('gulp');
var through = require('through2');
var stylus = require('stylus');
var gstylus = require('gulp-stylus');

var plugin = function (opts) {
  return through.obj(function(file, enc, cb) {
    stylus(file.contents.toString())
      .set('filename', file.path)
      .render(function(err, css) {
        console.log(err, css);
        file.contents = new Buffer(css);
        cb(null, file);
      });
  });
}
gulp.task('stylus', function() {
  gulp.src('./stylus/*.styl')
    .pipe(plugin())
    .pipe(gulp.dest('./built-stylus'));
});


gulp.task('gstylus', function() {
  gulp.src('./stylus/*.styl')
    .pipe(gstylus())
    .pipe(gulp.dest('./built-gstylus'));
});
