/**
 * SODEP S.A. (c) 2016
 * @type Module marionette|Module marionette
 * @author fhermosilla@sodep.com.py
 */

 /**
  * QuestionFormView
  *
  * @class
  * @name view.QuestionFormView
  * Esta vista muestra un item de las lecturas
  */


var Marionette       = require('marionette');
var Bootstrap        = require('bootstrap');
var moment           = require('moment');
//Template
var Template         = require('templates/lecture_detail.html');

//Model
var QuestionModel    = require('models/QuestionModel');

// TODO Esto funciona mágicamente y
// no se ni como. Investigar mejor
// y documentar

var LectureListItemView = Marionette.ItemView.extend({
   initialize:function(params){
     this.model = params.model;
   },
   template: Template,
   events: {
      "click ":""
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
   initTooltip:function(){
     var text = '<span>Total preguntas: '+
     this.model.get('totalQuestion') +
     '</span> <br><span> Total Votos: ' +
      this.model.get('totalVotes') +
      '</span>';
     $("#lecture-"+this.model.get('lectureId')).tooltip({
      container:'body',
      title:text,
      content:'<p>fdsa</p>',
      html:true
    });
   }

});

module.exports = LectureListItemView;
