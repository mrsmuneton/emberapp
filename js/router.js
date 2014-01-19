App.Router.map(function () {
    this.resource('decisions', { path: '/' });
});

App.DecisionsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('decision');
    }
});