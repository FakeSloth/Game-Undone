var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'http://addyosmani.github.io/backbone-fundamentals/img/placeholder.png',
    title: 'No title',
    author: 'Unknown',
    releaseDate: 'Unknown',
    keywords: 'None'
  }
});
