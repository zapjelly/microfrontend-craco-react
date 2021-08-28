const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 8083,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
