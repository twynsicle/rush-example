module.exports = {
  stories: [
    '../node_modules/@local/**/src/**/*.stories.mdx',
    '../node_modules/@local/**/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpack: async (config) => {
    // Removes warnings from Storybook build.
    config.performance.hints = false;
    config.performance.maxEntrypointSize = 5 * 1024 * 1024;
    config.performance.maxAssetSize = 5 * 1024 * 1024;
    return config;
  },
};
