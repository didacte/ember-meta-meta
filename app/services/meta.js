import Ember from 'ember';

export default Ember.Object.extend({
  /**
    Inject given metas in document.

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
    var metas = document.querySelectorAll('meta[data-meta-meta="true"]')
        metas = Ember.ArrayProxy.create({ content: Ember.A(metas) });

    // Remove previously set metas
    metas.forEach(function(meta){
      meta.removeAttribute('content');
    });

    Ember.keys(attributes).forEach(function(name){
      var value = attributes[name],
          meta;

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
    });
  }
});
