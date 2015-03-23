var app = app || {};

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

app.LibraryView = Backbone.View.extend({
  el: '#books',
  initialize: function(initialBooks) {
    this.collection = new app.Library();
    this.listenTo(this.collection, 'add', this.renderBook);
    this.render();
    this.collection.fetch();
  },
  render: function() {
    this.collection.each(function(item) {
      this.renderBook(item);
    }, this);
  },
  renderBook: function(item) {
    var bookView = new app.BookView({
      model: item
    });
    this.$el.append(bookView.render().el);
  },
  events: {
    'click #add': 'addBook'
  },
  addBook: function(e) {
    e.preventDefault();
    var formData = {};
    
    $('#addBook')
    .children('input')
    .each(function(i, el) {
      if ($(el).val() != '') {
        formData[el.id] = $(el).val();
      }
    });

    var book = new app.Book(formData);
    this.collection.add(book);
    book.save();
  }
});
