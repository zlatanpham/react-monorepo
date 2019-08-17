const path = require('path');
// const webpack = require('webpack');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVars = lessToJs(
  fs.readFileSync(path.join(__dirname, '../../config/antTheme.less'), 'utf8'),
);

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [
        [
          'import',
          {
            libraryName: 'lodash',
            libraryDirectory: '',
            camel2DashComponentName: false,
          },
          'lodash',
        ],
        [
          'import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
          },
          'antd',
        ],
      ],
    },
  });

  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          modifyVars: themeVars,
          javascriptEnabled: true,
        },
      },
    ],
    include: [
      path.join(__dirname, '../config'),
      /[\\/]node_modules[\\/].*antd/,
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
