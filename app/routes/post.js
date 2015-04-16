import Ember from 'ember';

export default Ember.Route.extend({
  model: function(args) {
    return this.store.find('blog-post', args.id);
  },
});
