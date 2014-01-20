App = Ember.Application.create();


var useLocalStorage = confirm("Use the Local Storage Adapter?  If you choose Cancel, you will see the fixture data.");

if(useLocalStorage){
    App.ApplicationAdapter = DS.LSAdapter.extend({
        namespace: 'decisions'
    });
} else {
    App.ApplicationAdapter = DS.FixtureAdapter.extend();
}