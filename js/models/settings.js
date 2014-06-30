App.Settings = DS.Model.extend({
  dataSource: DS.attr('string', { defaultValue: 'fixture' }),
  cssStyle: DS.attr('string', { defaultValue: 'stark' })
});


App.Settings.FIXTURES = [
 {
   id: 1,
   dataSource: 'fixture',
   cssStyle: 'stark'
}
];
