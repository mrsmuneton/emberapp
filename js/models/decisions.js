App.Decision = DS.Model.extend({
  title: DS.attr(),
  yesCount: DS.attr(),
  noCount: DS.attr()
});


App.Decision.FIXTURES = [
 {
   id: 1,
   title: 'Vote yes or no and count the votes!',
   yesCount: 0,
   noCount: 0
 },
 {
   id: 2,
   title: 'Ember js is enthralling.',
   yesCount: 88,
   noCount: 0
 },
{
    id: 3,
    title: 'Bring on the rain!',
    yesCount: 100,
    noCount: 0
},
{
    id: 4,
    title: 'There is only one way to eat a pepperoni pizza.',
    yesCount: 0,
    noCount: 0
}
];
