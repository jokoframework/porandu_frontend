/**
 * 
 * @type Module gulp|Module gulp
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var url         = require('url');
var proxy       = require('proxy-middleware');
var reload      = browserSync.reload;
var config      = require('./config');

// Corremos el sever con API de prueba
// 1. Construimos archivos de vendor
// 2. Construimos nuestros propios estilos
// 3. Construimos JS para navegadores (browserify)
var browserSyncTask = function(options) {
  'use strict';

  var proxyUrl = config.SERVER.API_URL;
  if (options && options.mode === 'LOCAL') {
      proxyUrl = config.SERVER.API_URL_LOCAL;
  }

  var proxyOptions = url.parse(proxyUrl);
  proxyOptions.route = '/api';
    // requests to `/api/x/y/z` are proxied to `http://localhost:3000/secret-api`

  // Levanta un servidor HTTP
  // que ya tiene unos endpoints
  // de prueba implementados.
  browserSync({
    notify: false,
    port: 9000,
	server: {
      baseDir: ['dist'],
      middleware: [
          proxy(proxyOptions)
      ]
    }
  });
 

  // miramos nuestro código
  // para detectar cambios y
  // recargar autom�ticamente
  gulp.watch([
    config.sourceDir + '/*.html',
    config.sourceDir + '/js/**/*.js',
    config.sourceDir + '/app/images/**/*'
  ]).on('change', reload);

  // FIXME no se porque esto esta separado del resto
  gulp.watch(config.sourceDir + '/styles/**/*.css', ['styles']);
    
};

var makeBrowserSync = function(options) {
    return function() {
      browserSyncTask(options);  
    };
};

module.exports = makeBrowserSync;
