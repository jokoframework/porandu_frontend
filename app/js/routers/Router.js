var Backbone = require('backbone');
var RouterController = require('controllers/RouterController');

var Router = Backbone.Router.extend({
    routes: {
        'index': 'showEvents',
        ':event': 'showLectures',
        ':event/:lecture': 'showQuestions',
        ':event/:lecture/add': 'addQuestion',
        'question/:question': 'viewQuestion',
        'question/:question/upvote': 'vote',
        'question/:question/downvote': 'unvote'
    },

    showEvents: function() {
        window.App.vent.trigger('index:show');
    },

    showLectures: function (event) {
        window.App.vent.trigger('lectures:show', event);
    },

    showQuestions: function(event, lecture) {
        window.App.vent.trigger('questions:show', event, lecture);
    },

    addQuestion: function (event, lecture) {
        window.App.vent.trigger('questions:add', event, lecture);
    },

    vote: function (event, lecture, question) {
        window.App.vent.trigger('questions:detail', event, lecture, question);
    },

    unvote: function (event, lecture, question) {
        window.App.vent.trigger('questions:vote', event, lecture, question);
    }
});

module.exports = Router;
