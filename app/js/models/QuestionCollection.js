/**
 *
 * Lista de preguntas.
 *
 *
 * @type Backbone.Collection
 */
var Backbone = require('backbone');
var _ = require('underscore');
var QuestionModel = require('models/QuestionModel');
var config = require('config');

/**
 * @class models.QuestionCollection
 */
var QuestionCollection = Backbone.Collection.extend({
    model: QuestionModel,
    initialize: function (options) {
        Backbone.Collection.prototype.initialize.apply(this, arguments);
        if (options.lecture_id) {
            this.lecture_id = options.lecture_id;
        }
    },
    url: function() {
        var baseUrl = config.api + '/questions';
        if (!_.isUndefined(this.lecture_id)) {
            baseUrl += '?lectureId=' + this.lecture_id
        }
        return baseUrl;
    }
});

module.exports = QuestionCollection;
