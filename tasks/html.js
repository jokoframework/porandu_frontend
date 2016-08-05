var config =  require('./config');
var gulp = require('gulp');

// Html task
module.exports = function() {

  // Put our index.html in the dist folder
  gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir));
};