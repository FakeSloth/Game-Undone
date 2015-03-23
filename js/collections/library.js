var app = app || {};

app.Library = Backbone.Collection.extend({
  model: app.Book,
  localStorage: new Backbone.LocalStorage('todos-backbone')
});
