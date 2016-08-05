var gulp   = require('gulp');
var config = require('./config');

/**
 * Move assets to build
 */
module.exports = function() {
    "use strict";

    gulp.src([config.sourceDir + '/fonts/**/*'])
        .pipe(gulp.dest(config.buildDir + '/fonts/'));
	
};