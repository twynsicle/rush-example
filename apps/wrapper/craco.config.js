const ModuleFederationPlugin = require('@local/craco-plugin-module-federation');

const moduleFederationPlugin = {
  plugin: ModuleFederationPlugin,
  options: {
    federationConfig: {
      name: 'Host',
      filename: 'remoteEntry.js',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js',
      },
      exposes: {},
      shared: {},
    },
  },
};

module.exports = {
  plugins: [moduleFederationPlugin],
};
