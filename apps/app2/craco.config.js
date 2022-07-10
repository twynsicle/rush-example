const ModuleFederationPlugin = require('@local/craco-plugin-module-federation');

const moduleFederationPlugin = {
  plugin: ModuleFederationPlugin,
  options: {
    federationConfig: {
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      exposes: {
        './App': './src/App',
      },
    },
  },
};

module.exports = {
  plugins: [moduleFederationPlugin],
};
