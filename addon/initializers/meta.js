export default {
  name: 'meta',

  initialize: function(app, oldApp) {
    // Ember 1.3 compat
    if(oldApp.inject) {
      oldApp.inject('route', 'meta', 'service:meta');
    }
    // Ember 2.x
    else {
      app.inject('route', 'meta', 'service:meta');
    }
  }
};
