var app = app || {};

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer',
  template: _.template($('#bookTemplate').html()),
  render: function() {
    this.$el.html(this.template(this.model.attributes))
    return this;
  },
  events: {
    'click .delete': 'deleteBook'
  },
  deleteBook: function() {
    // delete model
    this.model.destroy();
    // delete view
    this.remove();
  }
});
