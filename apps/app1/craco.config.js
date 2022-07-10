const ModuleFederationPlugin = require('@local/craco-plugin-module-federation');

const moduleFederationPlugin = {
  plugin: ModuleFederationPlugin,
  options: {
    federationConfig: {
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      exposes: {
        './App': './src/App',
      },
    },
  },
};

module.exports = {
  plugins: [moduleFederationPlugin],
};
