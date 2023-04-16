var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('lint', function(){
  return gulp.src('index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['lint', 'test']);
