import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    post: function() {
      this.store.createRecord('blog-post', {
        title: this.get('title'),
        text: this.get('text'),
      }).save();
    },
  },
});
