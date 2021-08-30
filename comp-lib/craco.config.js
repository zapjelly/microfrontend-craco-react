const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 8081,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
