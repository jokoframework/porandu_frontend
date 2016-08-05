var gulp  = require('gulp');
var guzip = require('gulp-zip');

module.exports = function() { 
	return gulp.src('dist/**')
	   .pipe(guzip('frontend.zip'))
	   .pipe(gulp.dest('dist'));

}