var Marionette     = require('marionette');
var MainTemplate   = require('templates/modal.html')
var _              = require('underscore');
/**
 * Pagina que abre un modal
 *
 * @class ModalView
 */



var MainTemplate = require("templates/modal.html");

//Esta vista crea un popup y dentro del contenido del popup pone una vista
//En caso que se necesite solamente un mensaje se puede seteear la propiedad message. Sin embargo, si se utiliza en conjunto con una vista. La vista prevalece sobre el mensaje.
module.exports = Marionette.ItemView.extend({
    template: MainTemplate,
    initialize: function (options) {

        this.options = options;
    },
    events: {
        "click #action-modal": "actionModal"
    },
    open: function () {
        $('.modal').modal("show");
    },
    close: function () {
        $('.modal').modal("hide");
    },
    render: function () {
        var json = {};
        json.title = (this.options && this.options.title) || "";
        var html = MainTemplate(json);
        this.$el.html(html);

        //Pinta la vista interna del modal
        if (this.options && this.options.innerView) {
            var bodyNode = this.options.innerView.render().el;
            this.$el.find('.modal-body').append(bodyNode);
            if (typeof this.options.innerView.initComponents !== "undefined") {
                this.options.innerView.initComponents();
            }
        }

        //Si se definieron botones los agrega
        if (this.options.buttons) {

            var divOfButtons = this.$el.find(".modal-footer");
            var button;

            var callbackOnClick = function (f, obj) {
                return function () {
                    f.apply(obj);
                };
            };
            var self = this;
            _.each(this.options.buttons, function (item) {
                button = $('<button type="button" class="btn ' + item.classes + '" >' + item.label + '</button>');
                button.click(callbackOnClick(item.callback, self.options.obj || button));
                divOfButtons.append(button);
            });

        }
        //Inicializa el modal
        $('.modal').modal({show: false});
        return this;
    },
    actionModal: function (e) {
        e.preventDefault();
        this.trigger("modalConfirmAction");
    },
    close: function () {
        $('.modal').modal('toggle');
    },
    appendViewRendered: function (viewRendered) {
        this.$el.find('.modal-body').append(viewRendered);
    }
});
