
// node/full

module.exports = {
  mode: 'development',
  target: 'node',
  output: {
    path: require('path').resolve(__dirname, 'dist'),
    library: 'RiTa',
    filename: 'rita-node.js',
    libraryTarget: 'commonjs2',
  },
  node: {
    fs: "empty",
    __dirname: false,
    __filename: false,
  },
  watchOptions: {
    ignored: /node_modules/
  },
  externals: ['he', 'colors', /^antlr4\/.+$/],
  entry: './src/rita.js'
};
