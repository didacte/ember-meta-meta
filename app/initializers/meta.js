import Meta from '../services/meta';

export default {
  name: 'meta',

  initialize: function(container, application) {
    var meta;

    application.register('meta:main', Meta.create(), { singleton: true, instantiate: false });
    application.inject('route', 'meta', 'meta:main');

    // Store default values
    meta = container.lookup('meta:main');
    meta.storeDefaultTitle();

    // Bind on didTransition
    container.lookup('router:main').on('didTransition', function() { meta.insert() });
  }
};
