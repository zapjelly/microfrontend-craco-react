module.exports = {
  name: 'COMPLIB',
  exposes: {
    './Button': './src/Button',
  },
  remotes: {
    FESHARED: 'FESHARED@http://localhost:8082/remoteEntry.js',
  },
  filename: 'remoteEntry.js',
};
