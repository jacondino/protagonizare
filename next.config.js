const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:8].[ext]',
          publicPath: '/_next/static',
          outputPath: 'static',
          esModule: false,
        },
      });
  
      return config;
    }
  };

  module.exports = withCSS(withSass(nextConfig))