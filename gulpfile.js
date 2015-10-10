var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');

gulp.task('default', function() {
	console.log("Hi");
});
gulp.task('scripts', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));

});
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task('webserver2', function() {
  connect.server();
});
