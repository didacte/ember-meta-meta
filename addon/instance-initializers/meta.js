export default {
  name: 'meta',

  initialize(appInstance) {
    const meta = appInstance.lookup('service:meta');

    meta.storeDefaultTitle();

    // Bind on didTransition
    appInstance.lookup('router:main').on('didTransition', () => {
      meta.insert();
    });
  }
};
