var Backbone   = require('backbone');
var fixture    = require('./fixture');
var collection = new Backbone.Collection(fixture);

module.exports = function (api) {
    api.route('/api/questions').get(function (req, res) {
        var model = collection.where({lecture_id: req.query.lectureId});
        res.json(model);
    });

};
