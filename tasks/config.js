var util = require('gulp-util');
/**
 */
module.exports = {
  'SERVER': {
      'API_URL': 'http://localhost:9082',
      'API_URL_LOCAL': 'http://localhost:9082/api'
  },
  api:"/porandu",
  buildDir: './dist',

  sourceDir: './app',

  vendor: {
    src: './app/vendor'
  },

  node: {
   src: './node_modules'
  },

  views: {
    index: 'app/index.html',
  },
  production: !!util.env.production
};
