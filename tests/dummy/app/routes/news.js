import Ember from 'ember';

export default Ember.Route.extend({
  meta: Ember.inject.service(),
  setupController: function (controller, model) {
    this.get('meta').update({
      title: 'This Is News Title',
      description: 'This Is News Description',
      'og:image': 'https://exemple.net/latest-news.png'
    });
  }
});
