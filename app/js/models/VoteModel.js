/**
 *
 * Representa a un voto
 *
 *
 * @type Backbone.Model
 */
var Backbone = require('backbone');
var config = require('config');


/**
 * @class models.VoteModel
 */
var VoteModel = Backbone.Model.extend({
    defaults: {

    },
    url:function(){
      var baseUrl = '';
      if(!this.get('questionId')){
        throw new error('No se puede enviar el voto sin el parametro: questionId');
      }
      if(this.get('voted')===true){
        baseUrl = config.api + '/questions/'+this.get('questionId')+'/downvote';
      }else{
        baseUrl = config.api + '/questions/'+this.get('questionId')+'/vote';

      }
      return baseUrl;
    }
});

module.exports = VoteModel;
