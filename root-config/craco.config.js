const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 3000,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
