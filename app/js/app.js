/**
 * Aplicación con métodos y estado global
 *
 * @type Marionette Module
 */
var Backbone          = require('backbone');
var Marionette        = require("marionette");
var SessionModel      = require('models/SessionModel');
var HeaderItemView    = require('views/header/HeaderItemView');
var LoginItemView     = require('views/login/LoginItemView');
var HomeLayoutView    = require('views/HomeLayoutView');
var EventHomeView     = require('views/EventHomeView');
var LectureHomeView   = require('views/LectureHomeView');
var QuestionHomeView   = require('views/QuestionHomeView');
var ErrorHandler      = require('errorhandler');

var App = new Marionette.Application();


// variable global de sesión
App.session = new SessionModel({});

// Contenedor de Regiones
App.addRegions({
   header: "#header-region",
   main: "#main-region",
   dialog: "#dialog-region"
});

App.showHeader = function () {
    if (!App.headerItemView) {
        App.headerItemView = new HeaderItemView();
        App.header.show(App.headerItemView);
    }
};

App.showHomePage = function() {
    App.homeLayoutView = new HomeLayoutView();
    App.main.show(App.homeLayoutView);
};

App.showLoginPage = function () {
    App.loginItemView = new LoginItemView();
    App.main.show(App.loginItemView);
};

App.showEventPage = function() {
    var eventHomeView = new EventHomeView();
    App.main.show(eventHomeView);
};

App.showLecturePage = function(event) {
    var lectureHomeView = new LectureHomeView({event_id: event});
    App.main.show(lectureHomeView);
};

App.showQuestionPage = function(event, lecture) {
    var questionHomeView = new QuestionHomeView({lecture_id: lecture});
    App.main.show(questionHomeView);
};


App.showMainContent = function () {
    App.showHeader();
};


/**
 * Utilitario para navegar a una ruta
 *
 * @param {type} route
 * @param {type} options
 * @returns {undefined}
 */
App.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

/**
 * Utilitario para ver cual es
 * la ruta actual mostrada en la barra del navegador.
 *
 * @returns {nm$_backbone.module.exports.history.fragment|Marionette Module.history.fragment|nm$_backbone.exports.history.fragment}
 */
App.getCurrentRoute = function () {
    return Backbone.history.fragment;
};


App.vent.on('login:show', App.showLoginPage);
App.vent.on('index:show', App.showEventPage);
App.vent.on('lectures:show', App.showLecturePage);
App.vent.on('questions:show', App.showQuestionPage);
//App.vent.on('questions:vote', App.showQuestionPage);



App.on("start", function () {

    $('#loading-mask').hide();

    ErrorHandler.setupErrorHandling();

    App.showMainContent();

    console.log('Application started');
});

window.App = App;
module.exports = App;
