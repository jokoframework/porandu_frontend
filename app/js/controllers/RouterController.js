/**
 *
 * @type Module app|Module app
 */

/**
 * Definicion de acciones sobre URLS
 *
 * @class controllers.RouterController
 */
var RouterController = {

    showLoginView: function () {
        window.App.session.resetSession();
        window.app.vent.trigger('login:show');
    }
    
};


module.exports = RouterController;
