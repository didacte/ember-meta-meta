Ember.Route.reopen({
  /**
    Send all attributes to be set for a given route.

    For exemple :

    ```js
      this.setMetas({
        title: 'This Is News Title',
        description: 'This Is News Description',
        'og:image': 'https://exemple.net/latest-news.png'
      });
    ```

    @method setMetas
    @param {Object} attributes
  */
  setMetas: function(attributes) {
    var self = this;
    Ember.keys(attributes).forEach(function(key){
      self.router.setMeta(key, attributes[key]);
    });
  }
});

Ember.Router.reopen({
  /**
    Inject given meta in document.

    Exemple :

    ```js
      self.router.setMeta('title', 'Homepage of the Crew');
    ```

    @method setMetas
    @param {Object} attributes
  */
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
