/**
 *
 * Almacena los detalles de una charla.
 *
 *
 * @type Backbone.Model
 */
var Backbone = require('backbone');

/**
 * @class models.QuestionModel
 */
var QuestionModel = Backbone.Model.extend({
    defaults: {
        title: "",
        detail: "",
        author: "",
        lecture_id: "",
        votes: 0,
        voted: false
    }
});

module.exports = QuestionModel;

