/**
 *
 * Visualizacion de preguntas
 *
 * @type Marionette.CollectionView
 */
var Marionette           = require('marionette');
var moment               = require('moment');
var QuestionCollection   = require('models/QuestionCollection');
var Template             = require('templates/question_list.html');
var QuestionListItemView = require('views/content/QuestionListItemView');

/**
 * @class models.LectureListView
 */
var QuestionListView = Marionette.ItemView.extend({
    template : Template ,
    initialize: function (options) {
        this.lectureId  = options.lecture_id;
        this.collection = new QuestionCollection({
            lecture_id: options.lecture_id
        });
    },
    onRender:function(){
      var self = this;
      var $questionsList = this.$el.find("#question-list");
      $questionsList.empty();
      this.collection.each(function(model){
        var questionListItemView = new QuestionListItemView({
          model:model,
          lectureId:self.lectureId
        });
        $questionsList.append(questionListItemView.render().el);
      });

      setTimeout(function(){
        self.refreshView();
      }, 5000);
    },
    refreshView:function(){
      var self = this;
      self.collection.fetch({
        success:function(){
          self.render();
        }
      });

    }
});

module.exports = QuestionListView;
