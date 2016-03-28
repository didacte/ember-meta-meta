export default {
  after: 'meta',
  name: 'meta-defaults',
  initialize: function(applicationInstance) {
    const meta = lookup(applicationInstance, 'service:meta');
    meta.set('defaultTitle', 'My Custom Default Title');
    meta.reopen({
      title: function(value) {
        return value + ' - My Website';
      }
    });
  }
};

function lookup(applicationInstance, name) {
  // Ember 2.x
  if(applicationInstance.lookup) {
    return applicationInstance.lookup(name);
  }

  // Ember 1.13 compat
  return applicationInstance.container.lookup(name);
}
