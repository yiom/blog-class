import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('post', {path: '/post/:id'});
  this.resource('new-post', {path: '/new'});
});
