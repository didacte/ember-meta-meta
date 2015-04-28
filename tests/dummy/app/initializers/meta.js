import {initialize} from 'ember-meta-meta/initializers/meta-config';

export default {
  name: 'meta',

  initialize: function(container, application) {
    var config = {
      prefix: 'Dummy Website'
    };

    initialize(container, application, config);
  }
};
