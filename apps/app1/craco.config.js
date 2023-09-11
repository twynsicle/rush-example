const ModuleFederationPlugin = require('@local/craco-plugin-module-federation');

const moduleFederationPlugin = {
  plugin: ModuleFederationPlugin,
  options: {
    port: 3001,
    federationConfig: {
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      exposes: {
        './App1': './src/App',
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: '18.1.0',
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: '18.1.0',
        },
      },
    },
  },
};

module.exports = {
  plugins: [moduleFederationPlugin],
};
