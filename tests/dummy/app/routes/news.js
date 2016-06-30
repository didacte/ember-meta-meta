import Ember from 'ember';
const {Route} = Ember;

export default Route.extend({
  afterModel() {
    this.get('meta').update({
      title: 'This Is News Title',
      description: 'This Is News Description',
      'og:image': 'https://exemple.net/latest-news.png',
      'og:description': 'News Description for Open Graph',
      'twitter:author': '@j15e'
    });
  }
});
