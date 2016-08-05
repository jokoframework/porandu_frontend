var gulp        = require('gulp');
var config      = require('./config');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

module.exports = function () {
   
  return gulp.src([
      config.sourceDir + '/css/main.css'
    ]).pipe($.sourcemaps.init())
    .pipe($.postcss([
      require('autoprefixer')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.buildDir + '/css'))
    .pipe(reload({ stream: true }));
};