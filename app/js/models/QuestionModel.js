/**
 *
 * Representa a una pregunta
 *
 *
 * @type Backbone.Model
 */
var Backbone = require('backbone');
var config = require('config');


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
    },
    url:function(){
      baseUrl = config.api + '/questions';
      return baseUrl;

    }
});

module.exports = QuestionModel;
