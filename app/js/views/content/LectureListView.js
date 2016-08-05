/**
 *
 * Visualizacion de eventos
 *
 * @type Marionette.CollectionView
 */
var Marionette = require('marionette');
var LectureCollection = require('models/LectureCollection');
var Templates = require('joko-templates');

var LectureListItemView = require('views/content/LectureListItemView');

/**
 * @class models.LectureListView
 */
var LectureListView =Marionette.ItemView.extend({
    template: Templates.lectureLayoutView,
    initialize: function (options) {
        Marionette.CollectionView.prototype.initialize.apply(this, arguments);
        this.collection = new LectureCollection({
            event_id: options.event_id
        });
    },
    onRender:function(){
      var $lecture = $('#lectures');
      if(this.collection.length<1){
        $lecture.html('<h3 class="text-center">No existen charlas registradas para este evento</h3>');
      }else{
        $lecture.empty();
        this.collection.each(function(model){
          var lectureListItemView = new LectureListItemView({
            model:model
          });
          $lecture.append(lectureListItemView.render().el);
          lectureListItemView.initTooltip();
        });
      }
    }
});

module.exports = LectureListView;
