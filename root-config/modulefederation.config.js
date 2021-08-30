module.exports = {
  name: 'root-config',
  remotes: {
    FESHARED: 'FESHARED@http://localhost:8082/remoteEntry.js',
    COMPLIB: 'COMPLIB@http://localhost:8081/remoteEntry.js',
  },
  filename: 'remoteEntry.js',
};
