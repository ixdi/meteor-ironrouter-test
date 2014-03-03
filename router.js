if (Meteor.isClient) {
    Session.set('currentProjectId', null);

    Router.configure({
        notFoundTemplate: 'notFound',
        loadingTemplate: 'loading',
    });

    var mustBeSignedIn = function (pause) {
        if (!Meteor.user()) {
            this.redirect('home');
        } 
    }

    var mustHaveProjectSelected = function (pause) {
        if (Session.equals('currentProjectId', null)) {
            this.redirect('home');
        }
    }

    // TODO: add userForgotPassword
    Router.before(mustBeSignedIn, {except: ['home']});
    Router.before(mustHaveProjectSelected, {except: ['home']});

    Router.map(function () {
        this.route('home', {
            path: '/'
        });
        this.route('explorer', {
            path: '/explorer'
        });
    });
}
