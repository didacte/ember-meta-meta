export default {
  after: 'meta',
  name: 'defaults',
  initialize: function(container, application) {
    var meta = container.lookup('meta:main');
    meta.set('defaultTitle', 'My Custom Default Title');
  }
};
