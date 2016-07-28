/**
 *
 * Visualizacion de preguntas
 *
 * @type Marionette.CollectionView
 */
var Marionette = require('marionette');
var QuestionCollection = require('models/QuestionCollection');
var Templates = require('joko-templates');

/**
 * @class models.LectureListView
 */
var QuestionListView = Marionette.CollectionView.extend({
    childView: Marionette.ItemView.extend({
        className: "row",
        template: Templates.questionItemView
    }),
    initialize: function (options) {
        Marionette.CollectionView.prototype.initialize.apply(this, arguments);
        this.collection = new QuestionCollection({
            lecture_id: options.lecture_id
        });
    }
});

module.exports = QuestionListView;
