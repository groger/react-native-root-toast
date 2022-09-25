const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  /*output: {
    path: `${__dirname}/lib`,
    filename: 'index.js',
    library: '@gwroger/react-native-root-toast',
    libraryTarget: 'umd',
  },*/
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: '@gwroger/react-native-root-toast',
    //libraryTarget: 'commonjs2',
  },
  externals: { "react-native": true },
  module: {
    /*rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],*/
    rules: [
      {
        //test: /\.(js|jsx)$/,
        //test: /\.js$|jsx/,
        test: /\.js|\.jsx|\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
    ],
  },
  resolve: {
    alias: {
            'react-native$': 'react-native-web'
        },
   //extensions: ['.js','.jsx'],
   extensions: ['*', '.js', '.jsx', '.ts']
 },
};
