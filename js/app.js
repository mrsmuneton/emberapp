App = Ember.Application.create();


//App.ApplicationAdapter = DS.FixtureAdapter.extend();
var useLocalStorage = confirm("Use the Fixture Adapter?  If you choose Cancel, you will see the Local Storage data that persists across page loads.");

if(useLocalStorage){
    App.ApplicationAdapter = DS.FixtureAdapter.extend();
} else {
    App.ApplicationAdapter = DS.LSAdapter.extend({
        namespace: 'decisions'
    });
}