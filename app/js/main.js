/**
 *
 * @type Module backbone|Module backbone
 */
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var App = require('app');
var Router = require('routers/Router');

App.session.checkAuth({
    complete: function () {

        App.start();

        App.router = new Router();

        if (Backbone.history) {
            Backbone.history.start();
        }
    }
});
