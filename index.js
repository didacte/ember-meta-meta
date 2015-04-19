/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-meta-meta',

  included: function() {
    this.app.import('vendor/meta-meta/meta-meta.js');
  }
};
