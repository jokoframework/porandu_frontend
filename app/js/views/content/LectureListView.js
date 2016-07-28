/**
 *
 * Visualizacion de eventos
 *
 * @type Marionette.CollectionView
 */
var Marionette = require('marionette');
var LectureCollection = require('models/LectureCollection');
var Templates = require('joko-templates');

/**
 * @class models.LectureListView
 */
var LectureListView = Marionette.CollectionView.extend({
    childView: Marionette.ItemView.extend({
        className: "row",
        template: Templates.lectureItemView
    }),
    initialize: function (options) {
        Marionette.CollectionView.prototype.initialize.apply(this, arguments);
        this.collection = new LectureCollection({
            event_id: options.event_id
        });
    }
});

module.exports = LectureListView;
