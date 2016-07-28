/**
 *
 * Almacena los detalles de un evento.
 *
 *
 * @type Backbone.Model
 */
var Backbone = require('backbone');

/**
 * @class models.EventModel
 */
var EventModel = Backbone.Model.extend({
    defaults: {
        code: "",
        description: "",
        image_url: ""
    }
});

module.exports = EventModel;
