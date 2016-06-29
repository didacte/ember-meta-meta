import Ember from 'ember';
const {Route} = Ember;

export default Route.extend({
  afterModel() {
    this.get('meta').update({
      title: 'This Is About Title'
    });
  }
});
