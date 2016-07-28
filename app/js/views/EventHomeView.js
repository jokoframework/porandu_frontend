var Marionette     = require('marionette');
var Templates      = require('joko-templates');
var EventListView = require('views/content/EventListView');

/**
 * Pagina de eventos
 *
 * @class EventLayoutView
 */
var EventHomeView = Marionette.ItemView.extend({
    template: Templates.eventLayoutView,
    onRender: function() {
        var listView = new EventListView({
            el: this.$("#events")
        });
        listView.collection.fetch({
            success: function () {
                listView.render();
            }
        });
    }
});

module.exports = EventHomeView;
