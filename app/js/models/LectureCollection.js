/**
 *
 * Lista de charlas.
 *
 *
 * @type Backbone.Collection
 */
var Backbone = require('backbone');
var _ = require('underscore');
var LectureModel = require('models/LectureModel');
var config = require('config');

/**
 * @class models.LectureCollection
 */
var LectureCollection = Backbone.Collection.extend({
    model: LectureModel,
    initialize: function (options) {
        Backbone.Collection.prototype.initialize.apply(this, arguments);
        if (options.event_id) {
            this.event_id = options.event_id;
        }
    },
    url: function() {
        var baseUrl = config.api + '/lectures';
        if (!_.isUndefined(this.event_id)) {
            baseUrl += '?eventId=' + this.event_id
        }
        return baseUrl;
    }
});

module.exports = LectureCollection;

