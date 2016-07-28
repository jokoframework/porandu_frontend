var Backbone   = require('backbone');
var fixture    = require('./fixture');
var collection = new Backbone.Collection(fixture);

module.exports = function (api) {
    api.route('/api/lectures').get(function (req, res) {
        var model = collection.where({event_id: req.query.eventId});
        res.json(model);
    });

};
