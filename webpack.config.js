const TerserPlugin = require('terser-webpack-plugin')

const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.svg$/,
        // include: [resolve(__dirname, 'src/svg')],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: { symbolId: 'icon-[name]' }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeXMLNS: true }]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  performance: {
    hints: false
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  }
}
