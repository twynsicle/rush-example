const ModuleFederationPlugin = require('@local/craco-plugin-module-federation-host');

const moduleFederationPlugin = {
  plugin: ModuleFederationPlugin,
  options: {
    federationConfig: {
      name: 'Host',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js',
      },
      exposes: {},
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
