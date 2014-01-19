App.EditDecisionView = Ember.TextField.extend({
    didInsertElement: function () {
        this.$().focus();
    }
});

Ember.Handlebars.helper('edit-decision', App.EditDecisionView);