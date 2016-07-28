var Marionette     = require('marionette');
var Templates      = require('joko-templates');
var QuestionListView = require('views/content/QuestionListView');

/**
 * Pagina de eventos
 *
 * @class QuestionHomeView
 */
var QuestionHomeView = Marionette.ItemView.extend({
    template: Templates.questionLayoutView,
    initialize: function (options) {
        Marionette.ItemView.prototype.initialize.apply(this, arguments);
        this.lecture_id = options.lecture_id;
    },
    onRender: function() {
        var listView = new QuestionListView({
            el: this.$("#questions"),
            lecture_id: this.lecture_id
        });

        listView.collection.fetch({
            success: function () {
                listView.render();
            }
        });
    }
});

module.exports = QuestionHomeView;
