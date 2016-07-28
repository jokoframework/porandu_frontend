var Marionette     = require('marionette');
var Templates      = require('joko-templates');
var LectureListView = require('views/content/LectureListView');

/**
 * Pagina de eventos
 *
 * @class LectureHomeView
 */
var LectureHomeView = Marionette.ItemView.extend({
    template: Templates.lectureLayoutView,
    initialize: function (options) {
        Marionette.ItemView.prototype.initialize.apply(this, arguments);
        this.event_id = options.event_id;
    },
    onRender: function() {
        var listView = new LectureListView({
            el: this.$("#lectures"),
            event_id: this.event_id
        });

        listView.collection.fetch({
            success: function () {
                listView.render();
            }
        });
    }
});

module.exports = LectureHomeView;
