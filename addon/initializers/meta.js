export default {
  name: 'meta',

  initialize() {
    // Support Ember 2.x and 1.1.13
    const app = arguments.length > 1 ? arguments[1] : arguments[0];
    app.inject('route', 'meta', 'service:meta');
  }
};
