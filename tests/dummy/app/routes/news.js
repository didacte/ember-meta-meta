import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    this.setMetas({
      title: 'This Is News Title',
      description: 'This Is News Description',
      'og:image': 'https://exemple.net/latest-news.png'
    });
  }
});
