/**
 * SODEP S.A. (c) 2016
 * @type Module marionette|Module marionette
 * @author fhermosilla@sodep.com.py
 */

 /**
  * QuestionListItemView
  *
  * @class
  * @name view.QuestionListItemView
  * Esta vista muestra un item de las lecturas
  */


var Marionette       = require('marionette');
var Bootstrap        = require('bootstrap');
var moment           = require('moment');
//Template
var Template         = require('templates/question_detail.html');

//Model
var VoteModel         = require('models/VoteModel');

var QuestionListItemView = Marionette.ItemView.extend({
   initialize:function(params){
     this.model = params.model;
     this.lectureId = params.lectureId;
     this.questionModel = new VoteModel();
     this.questionModel.set('voted', this.model.get('voted'));
     this.questionModel.set('questionId', this.model.get('questionId'));
     this.model = params.model;
   },
   template: Template,
   events: {
      "click a":"voteAction"
   },
   onBeforeRender:function(){
     var date = null;
     if(this.model.get('insertedAt')){
        date = new Date(this.model.get('insertedAt'));
     }else{
        date = new Date();
     }
     var momentObj = new moment(date);
     this.model.set('hour', momentObj.format('hh:mm'));
   },
   voteAction:function(e){
     e.preventDefault();
     var self = this;
     this.questionModel.save({},{
       success:function(model, response){
        self.model.set('voted', response.voted);
        self.model.set('votes', response.votes);
        self.questionModel.set('voted', response.voted);
        self.$el.find('.total-votes').html(response.votes);
        self.render();
       }
     });
   }

});

module.exports = QuestionListItemView;
