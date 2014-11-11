// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_tree .

App = Ember.Application.create();

App.Router.map(function() {
  this.route("posts");
});

App.IndexController = Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var that = this;
      $.ajax({
        type: 'POST',
        url: '/session',
        data: this.getProperties('email', 'password')
      }).done(function() {
        that.transitionToRoute('posts');
      }).fail(function(jqXHR) {
        alert("oh oh " + jqXHR.status);
      });
    }
  }
});

App.Post = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr()
});

App.PostsRoute = Ember.Route.extend({
  model: function() { return this.store.find('post'); }
});