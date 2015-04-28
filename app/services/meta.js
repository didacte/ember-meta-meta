import Ember from 'ember';

var forEach = Ember.EnumerableUtils.forEach;

export default Ember.Object.extend({
  /**
    Store the default document title

    @method storeDefaultTitle
  */
  storeDefaultTitle: function(){
    this.set('defaultTitle', window.document.title);
  },

  /**
    Set metas to be injected

    For exemple :

    ```js
      this.get('meta').update({
        title: 'This Is News Title',
        description: 'This Is News Description',
        'og:image': 'https://exemple.net/latest-news.png'
      });
    ```

    @method update
    @param {Object} attributes
  */
  update: function(attributes) {
    this.set('attributes', attributes);
  },

  /**
    Inject given metas in document after completed didTransition

    @method insert
  */
  insert: function() {
    var self = this,
        attributes = this.get('attributes') || { title: this.get('defaultTitle') },
        metas = document.querySelectorAll('meta[data-meta-meta="true"]');

    // Remove previously set metas
    forEach(metas, function(meta){
      meta.removeAttribute('content');
    });

    // Set new metas
    Ember.keys(attributes).forEach(function(key){
      self.setMeta(key, attributes[key])
    });

    // Reset for next transition
    this.set('attributes', null);
  },


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
    var meta;

    if (name === 'title') {
      window.document.title = value;
    } else {
      meta = document.querySelector('meta[name="' + name + '"]');

      // Create meta tag if does not exist
      if(!meta) {
        meta = document.createElement('meta');
        document.getElementsByTagName('head')[0].appendChild(meta);
      }

      meta.setAttribute('data-meta-meta', 'true');
      meta.setAttribute('content', value);
    }
  }
});
