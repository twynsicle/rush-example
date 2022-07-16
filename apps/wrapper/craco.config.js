const ModuleFederationPlugin = require('@local/craco-plugin-module-federation');

const moduleFederationPlugin = {
  plugin: ModuleFederationPlugin,
  options: {
    federationConfig: {
      name: 'Host',
      // filename: 'remoteEntry.js',
      // remotes: {
      //   app1: 'app1@http://localhost:3001/remoteEntry.js',
      //   app2: 'app2@http://localhost:3002/remoteEntry.js',
      // },
      remotes: {},
      exposes: {},
      shared: {
        react: {
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
          requiredVersion: '18.1.0',
        },
        'react-dom': {
          singleton: true, // only a single version of the shared module is allowed
          requiredVersion: '18.1.0',
        },
      },
    },
  },
};

module.exports = {
  plugins: [moduleFederationPlugin],
};
