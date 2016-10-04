export default {
  path: 'counter',
  getComponent(_, callback) {
    require.ensure([], (require) => {
      callback(null, require('../components/Counter').default);
    });
  }
};