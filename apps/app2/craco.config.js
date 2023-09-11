const ModuleFederationPlugin = require('@local/craco-plugin-module-federation');

const moduleFederationPlugin = {
  plugin: ModuleFederationPlugin,
  options: {
    port: 3002,
    federationConfig: {
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      exposes: {
        './App2': './src/App',
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
