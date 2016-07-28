/**
 *
 * Visualizacion de eventos
 *
 * @type Marionette.CollectionView
 */
var Marionette = require('marionette');
var EventCollection = require('models/EventCollection');
var Templates = require('joko-templates');

/**
 * @class models.EventListView
 */
var EventListView = Marionette.CollectionView.extend({
    collection: new EventCollection(),
    childView: Marionette.ItemView.extend({
        className: "row",
        template: Templates.eventItemView
    })
});

module.exports = EventListView;
