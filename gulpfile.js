/*eslint-env node*/

'use strict';

var gulp = require('gulp');

// Build our assets
gulp.task('assets',require('./tasks/assets'));

gulp.task('fonts',require('./tasks/fonts'));

gulp.task('images',require('./tasks/images'));

gulp.task('html', require('./tasks/html'));

gulp.task('watch', require('./tasks/watch'));


// Prepara un archivo (bundle) app.js con todo el código
// JS de nuestra aplicación listo para ser ejecutado
// dentro de un browser
gulp.task('browserify', require('./tasks/browserify'));

// Procesa estilos CSS de nuestra propia aplicación
// y los copia a paths.dest + '/css'
gulp.task('styles', require('./tasks/styles'));

// Procesa los JS y CSS de terceros (ejemplo: boostrap)
gulp.task('vendor', require("./tasks/vendor"));

// Ejecutamos estas tareas por defecto
gulp.task('build', ['html', 'fonts', 'images', 'vendor', 'styles', 'browserify'], function(cb) {
	cb(null);
});

// Ejecutamos estas tareas por defecto
gulp.task('default', ['html', 'fonts', 'images', 'vendor', 'styles', 'watch']);

// Ejecuta tareas por defecto y levanta server con endpoints de prueba
gulp.task('start:mock', ['default'], require('./tasks/serverMock'));

// Ejecuta tareas por defecto y levanta server con endpoints de prueba
gulp.task('dev', ['default'], require('./tasks/browserSync')(null));

// Ejecuta tareas por defecto y levanta server con endpoints de prueba
gulp.task('dev:local', ['default'], require('./tasks/browserSync')({mode: 'LOCAL'}));

gulp.task('zip', ['build'], require('./tasks/zip'));
