import Meta from '../services/meta';

export default {
  name: 'meta',

  initialize: function(container, application) {
    application.register('meta:main', Meta);
    application.inject('route', 'meta', 'meta:main');
  }
};
