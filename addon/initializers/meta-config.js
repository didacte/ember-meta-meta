export default {
  name: 'meta-config',

  initialize: function(container, application, overrides) {
   var config = {};

    if(typeof overrides !== 'undefined') {
      for(var attr in overrides) {
        config[attr] = overrides[attr];
      }
    }

    application.register('meta-config:main', config, { instantiate: false });
    application.inject('route', 'meta-config', 'meta-config:main');
  }
};
