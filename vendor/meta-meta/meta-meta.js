Ember.Route.reopen({
  setMetas: function(attributes) {
    Ember.keys(attributes).forEach(function(key){
      this.setMeta(key, attributes[key]);
    }.bind(this))
  },
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
