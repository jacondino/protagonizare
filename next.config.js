const withImages = require('next-images');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  };

  module.exports = withImages(withCSS(withSass(nextConfig)))