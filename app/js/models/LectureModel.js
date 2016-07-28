/**
 *
 * Almacena los detalles de una charla.
 *
 *
 * @type Backbone.Model
 */
var Backbone = require('backbone');

/**
 * @class models.LectureModel
 */
var LectureModel = Backbone.Model.extend({
    defaults: {
        code: "",
        description: "",
        image_url: "",
        author: "",
        event_id: ""
    }
});

module.exports = LectureModel;

