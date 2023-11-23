const pathh = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module .exports = {
  mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    output: {
      path: pathh.resolve(__dirname, 'dist'),
      filename: '[name].[hash:8].js',
      sourceMapFilename: '[name].[hash:8].map',
      chunkFilename: '[id].[hash:8].js',
      assetModuleFilename: '[name][ext]',
      clean: true,  
    },
    optimization: {
      runtimeChunk: 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo App',
            template: './src/index.html'
        })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        {
          test:/\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
        }, 
    }
