var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var concat   = require('gulp-concat');
var config   = require('./config');
var $        = require('gulp-load-plugins')();
var uglify   = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

// Compilamos archivos CSS de terceros (ejemplo: boostrap.css) y 
// los metemos todos en un mismo archivo: vendor.css
// 
// Copiaremos ese archivo a: paths.dest + '/css'
gulp.task('vendor-styles', function() {
  var stream = gulp.src([
      config.vendor.src + '/styles/bootstrap.css',
      config.vendor.src + '/styles/bootstrap-theme.css',
	  config.vendor.src + '/styles/bootstrap-datetimepicker.min.css'
	  
    ])
    .pipe(plumber())
	.pipe(config.production ? minifyCSS() : $.util.noop())
    .pipe(concat("vendor.css"));

   return stream.pipe(gulp.dest(config.buildDir + '/css/'));
  
});

// Compilamos archivos JS de terceros (ejemplo: boostrap.js) y 
// los metemos todos en un mismo archivo: vendor.js
// 
// Copiaremos ese archivo a: paths.dest + '/js'
gulp.task('vendor-scripts', function() {
  var stream = gulp.src([
      config.vendor.src + '/scripts/jquery.js',
      config.vendor.src + '/scripts/bootstrap.js',
	  config.vendor.src + '/scripts/moment-with-locales.min.js',
	  config.vendor.src + '/scripts/bootstrap-datetimepicker.min.js'
	  
    ])
    .pipe(plumber())
	.pipe(config.production ? uglify() : $.util.noop())
    .pipe(concat("vendor.js"));


   return stream.pipe(gulp.dest(config.buildDir + '/js/'));
});

gulp.task('vendor-fonts', function(){
    return gulp.src([config.vendor.src + '/fonts/**/*'])
        .pipe(gulp.dest(config.buildDir + '/fonts/'));
});

module.exports = function(cb) {
  gulp.start('vendor-styles');  
  gulp.start('vendor-scripts');  
  gulp.start('vendor-fonts');
  cb(null);
};