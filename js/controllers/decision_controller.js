App.DecisionController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        editDecision: function () {
            this.set('isEditing', true);
        },
        acceptChanges: function () {
            this.set('isEditing', false);

            if (Ember.isEmpty(this.get('model.title'))) {
                this.send('removeDecision');
            } else {
                this.get('model').save();
            }
        },
        removeDecision: function () {
            var decision = this.get('model');
            decision.deleteRecord();
            decision.save();
        },
        yesCountIncrement: function () {
            var decision = this.get('model');
            decision.set('yesCount', decision.get('yesCount')+1);
            decision.save();
        },
        noCountIncrement: function () {
            var decision = this.get('model');
            decision.set('noCount', decision.get('noCount')+1);
            decision.save();
        }
    }
});