const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {
  addLessLoader,
  addWebpackResolve,
  addBabelPlugins,
  override,
  addPostcssPlugins,
  babelInclude,
  useEslintRc,
  fixBabelImports,
} = require('customize-cra');

const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');
const themeVars = lessToJs(
  fs.readFileSync(path.join(__dirname, 'antTheme.less'), 'utf8'),
);

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.js'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelist: ['html', 'body'],
});

module.exports = override(
  // addWebpackResolve({
  //   alias: {
  //     'react-dom': '@hot-loader/react-dom',
  //   },
  // }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVars,
  }),
  addBabelPlugins('styled-components', [
    'tailwind-components',
    {
      config: path.join(__dirname, 'tailwind.config.js'),
      format: 'auto',
    },
    'react-hot-loader/babel',
  ]),
  useEslintRc(),
  // allow babel config from cra to transform outsite source
  babelInclude([path.resolve('src'), path.resolve('../ui')]),
  addPostcssPlugins([
    require('tailwindcss')(path.join(__dirname, 'tailwind.config.js')),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ]),
  config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = (config.plugins || []).concat([
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: 'stats.json',
        }),
      ]);
    }
    return config;
  },
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // config => rewireReactHotLoader(config),
);
