module.exports.getRules = () => {
    return [
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:8].[ext]',
          publicPath: '/_next/static',
          outputPath: 'static',
          esModule: false,
        },
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:8].[ext]',
          publicPath: '/_next/static',
          outputPath: 'static',
          esModule: false,
        },
      },
    ]
  }