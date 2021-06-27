const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer({ ssr: false });
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PACKAGE = require('./package.json');
const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const port = process.env.PORT || 8080;

module.exports = (env) => {
  return {
    mode: !!process.env.WEBPACK_DEV_SERVER || env.env === 'dev' ? 'development' : 'production',
    entry: ['./src/index.tsx'],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    output: {
      publicPath: '/',
      path: __dirname + '/dist',
      chunkFilename: 'static/[name].[chunkhash].js',
      filename: 'static/bundle.[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.mp3$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'audio/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.mp4$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'video/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(md)$/,
          use: [
            {
              loader: 'raw-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        root: path.resolve(__dirname, 'src/'),
        audio: path.resolve(__dirname, 'public/audio'),
        video: path.resolve(__dirname, 'public/video'),
        images: path.resolve(__dirname, 'public/images'),
        fonts: path.resolve(__dirname, 'public/fonts'),
        docs: path.resolve(__dirname, 'public/docs'),
      },
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ VERSION: PACKAGE.version }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        // favicon: 'public/images/favicon/favicon.png',
        dev: !!process.env.WEBPACK_DEV_SERVER || env.env === 'dev',
      }),
      new ESLintPlugin({
        files: 'src/**/*',
        extensions: ['ts', 'tsx'],
      }),
      new Dotenv(),
      // new BundleAnalyzerPlugin(),
    ],
    devServer: {
      host: 'local.astomusic.com',
      port: port,
      open: true,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3000',
          secure: true,
          changeOrigin: true,
        },
      ],
    },
  };
};
