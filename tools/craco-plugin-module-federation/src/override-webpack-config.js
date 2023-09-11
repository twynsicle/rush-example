const webpack = require('webpack');
const paths = require('react-scripts/config/paths');
const { MFLiveReloadPlugin } = require('@module-federation/fmr');

// const ModuleFederationConfig = {
//   ...federation,
//   filename: 'remoteEntry.js',
//   // shared: {
//   //   ...deps,
//   //   react: {
//   //     singleton: true,
//   //     requiredVersion: deps['react'],
//   //   },
//   //   'react-dom': {
//   //     singleton: true,
//   //     requiredVersion: deps['react-dom'],
//   //   },
//   // },
// };

const overrideWebpackConfig = ({
  webpackConfig,
  pluginOptions: { federationConfig, port },
  context: { env },
}) => {
  webpackConfig.output.publicPath = 'auto';

  const htmlWebpackPlugin = webpackConfig.plugins.find(
    (plugin) => plugin.constructor.name === 'HtmlWebpackPlugin',
  );

  htmlWebpackPlugin.userOptions = {
    ...htmlWebpackPlugin.userOptions,
    publicPath: paths.publicUrlOrPath,
    excludeChunks: [federationConfig.name],
  };

  // Set defaults
  federationConfig.filename = 'remoteEntry.js';

  webpackConfig.plugins = [
    ...webpackConfig.plugins,
    new webpack.container.ModuleFederationPlugin(federationConfig),
    new MFLiveReloadPlugin({
      port: port,
      container: federationConfig.name,
      standalone: true,
    }),
  ];
  return webpackConfig;
};

//   overrideDevServerConfig: ({ devServerConfig }) => {
//     devServerConfig.headers = {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': '*',
//       'Access-Control-Allow-Headers': '*',
//     };
//
//     return devServerConfig;
//   },
// };

module.exports = overrideWebpackConfig;
