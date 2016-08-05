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
  * Esta vista muestra el formulario de creación de una pregunta
  */

  require('parsleyjs/dist/i18n/es');

var Marionette       = require('marionette');
//Template
var Template         = require('templates/question_form.html');

//Model
var QuestionModel    = require('models/QuestionModel');
require('parsleyjs');

// TODO Esto funciona mágicamente y
// no se ni como. Investigar mejor
// y documentar

var QuestionFormView = Marionette.ItemView.extend({
   initialize:function(params){
     this.model = params.model;
   },
   template: Template,
   events: {

   },
   validateFormParameters:function(){
     return this.$('#question-form').parsley().validate();
   },
   getFormParameters:function(){
      var question = this.$el.find("#question").val();
      var clarification = this.$el.find("#clarification").val();
      var email = this.$el.find("#email").val();
      var fullName = this.$el.find("#full-name").val();
      this.model.set('title', question);
      this.model.set('description', clarification);
      this.model.set('email', email);
      this.model.set('fullName', fullName);
   },
   emptyFormParameters:function(){
     this.$el.find('.form-control').val('');
   }

});

module.exports = QuestionFormView;
