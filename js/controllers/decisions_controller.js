App.DecisionsController = Ember.ArrayController.extend({
    actions: {
        createDecision: function () {
            var title = this.get('newTitle');
            if (!title.trim()) { return; }

            var decision = this.store.createRecord('decision', {
                title: title,
                isCompleted: false
            });

            this.set('newTitle', '');

            decision.save();
        }
    }
});