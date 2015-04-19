Ember.Route.reopen({
  setMetas: function(attributes) {
    var self = this;
    Ember.keys(attributes).forEach(function(key){
      self.router.setMeta(key, attributes[key]);
    });
  }
});

Ember.Router.reopen({
  setMeta: function(name, value) {
    if (name === 'title') {
      window.document.title = value;
    } else {
      meta = document.querySelector('meta[name="' + name + '"]');

      // Create meta tag if does not exist
      if(!meta) {
        meta = document.createElement('meta');
        document.getElementsByTagName('head')[0].appendChild(meta);
      }

      meta.setAttribute('content', value);
    }
  }
});
