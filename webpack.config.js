module.exports = {
    entry: './src/main.jsx',
    output: {
      filename: './build/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
    { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
