/**
 *
 * Lista de eventos.
 *
 *
 * @type Backbone.Collection
 */
var Backbone = require('backbone');
var EventModel = require('models/EventModel');
var config = require('config');

/**
 * @class models.EventCollection
 */
var EventCollection = Backbone.Collection.extend({
    model: EventModel,
    url: config.api + '/evens'
});

module.exports = EventCollection;
