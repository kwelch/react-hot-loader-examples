export default {
  path: '/',
  indexRoute: {
    getComponent(_, callback) {
      require.ensure([], (require) => {
        callback(null, require('../components/Home').default);
      });
    },
  },
  getChildRoutes(_, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require('./counter').default,
      ]);
    });
  },
  getComponent(_, callback) {
    require.ensure([], (require) => {
      callback(null, require('../components/App').default);
    });
  },
};
