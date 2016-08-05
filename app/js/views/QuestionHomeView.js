var Marionette       = require('marionette');
var Templates        = require('joko-templates');
var noty = require("lib/notifier");
var QuestionListView = require('views/content/QuestionListView');
var QuestionFormView = require('views/QuestionFormView');

var ModalView        = require('views/modal_view.js');

//Model
var QuestionModel    = require('models/QuestionModel');


/**
 * Pagina de eventos
 *
 * @class QuestionHomeView
 */
var QuestionHomeView = Marionette.ItemView.extend({
    template: Templates.questionLayoutView,
    initialize: function (options) {
        Marionette.ItemView.prototype.initialize.apply(this, arguments);
        this.lectureId = options.lecture_id;
        this.model = new QuestionModel();
        this.model.set('lectureId', options.lecture_id);
    },
    events:{
      "click #new-question":"openModalForm"
    },
    onRender: function() {
        this.listView = new QuestionListView({
            lecture_id: this.lectureId
        });
        this.refreshListView();
        this.initPopup();
    },
    initPopup:function(){
        this.questionFormView = new QuestionFormView({
          model:this.model
        });
        this.questionModal = new ModalView({
                        innerView:this.questionFormView,
                        title:"Preguntar",
                        buttons:[
                            {label:"Enviar",
                             classes:"btn-form btn",
                             callback:function(model){
                                    var valid = this.questionFormView.validateFormParameters();
                                    if(valid){
                                      this.questionFormView.getFormParameters();
                                      this.saveQuestion();
                                      this.questionFormView.emptyFormParameters();
                                      this.questionModal.close();
                                    }
                              }
                            },
                            {label:"Cancelar",
                             classes:"btn-form-secondary margin-left-15 btn",
                             callback:function(){
                                 this.questionFormView.emptyFormParameters();
                                 this.questionModal.close();
                             }}
                        ],
                        obj:this
        });

        $("body").append(this.questionModal.render().el);
    },
    openModalForm:function(){
      this.questionModal.open();
    },
    saveQuestion:function(){
      var self = this;
      this.model.save({}, {
        success:function(model, response){
          noty.showInfoMsg("La pregunta ha sido registrada con éxito");
          self.refreshListView();
        },
        error:function(){

        }
      })
    },
    refreshListView:function(){
      var self = this;
      this.listView.collection.fetch({
          success: function () {
             self.$el.find("#questions-list-content").empty();
             self.$el.find("#questions-list-content").append(self.listView.render().render().el);
          }
      });
    }
});

module.exports = QuestionHomeView;
