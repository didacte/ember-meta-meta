import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    this.get('meta').update({
      title: 'About Page',
    });
  }
});
