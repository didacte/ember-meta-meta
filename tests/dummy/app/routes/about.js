import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    this.get('meta').update({
      title: 'This Is About Title'
    });
  }
});
