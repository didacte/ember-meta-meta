export default {
  name: 'meta',

  initialize(appInstance) {
    const meta = lookup(appInstance, 'service:meta');

    meta.storeDefaultTitle();

    // Bind on didTransition
    lookup(appInstance, 'router:main').on('didTransition', () => {
      meta.insert();
    });
  }
};

function lookup(appInstance, name) {
  // Ember 2.x
  if (appInstance.lookup) {
    return appInstance.lookup(name);
  }

  // Ember 1.13
  return appInstance.container.lookup(name);
}

