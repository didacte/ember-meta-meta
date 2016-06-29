export default {
  name: 'meta',

  initialize(app) {
    app.inject('route', 'meta', 'service:meta');
  }
};
