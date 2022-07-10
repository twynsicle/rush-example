const { createWebpackDevConfig } = require('@craco/craco');

const cracoConfig = require('./craco.config.js');
const webpackConfig = createWebpackDevConfig(cracoConfig);

console.log('TESTTESTTESTTESTTESTTESTTESTTEST');
console.log('TESTTESTTESTTESTTESTTESTTESTTEST');
console.log('TESTTESTTESTTESTTESTTESTTESTTEST');
console.log('TESTTESTTESTTESTTESTTESTTESTTEST');

console.log(webpackConfig);

module.exports = webpackConfig;
