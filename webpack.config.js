var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';
var isTest = ENV === 'test' || isTestWatch;
// var isProd = ENV === 'build'; not using it right now //

module.exports = function makeWebpackConfig() {

	var config = {};

	config.devtool = isTest ? 'inline-source-map' : 'eval-source-map';

	if (!isTest) {
		config.entry = isTest ? {} : {
			'polyfills': './src/polyfills.ts',
			'vendor': './src/vendor.ts',
			'app': './src/main.ts'
		};
	}

	config.output = isTest ? {} : {
		path: root('dist'),
		publicPath: 'http://localhost:8080/',
		filename: 'js/[name].js',
		chunkFilename: '[id].chunk.js'
	};

	config.resolve = {
		extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
	};

	var atlOptions = '';

	if (isTest && !isTestWatch) {
		// awesome-typescript-loader needs to output inlineSourceMap for code coverage to work with source maps.
		atlOptions = 'inlineSourceMap=true&sourceMap=false';
	}

	config.module = {
		rules: [
			{
				test: /\.ts$/,
				loaders: ['awesome-typescript-loader?' + atlOptions, 'angular2-template-loader'],
				exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
			},
			{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|otf|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'file-loader?name=img/[name].[hash].[ext]?'
			},
			{
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: [root('src/index.html')]
			},
			{
				test: /\.json$/, loader: 'json-loader'
			}
		]
	};

	if (!isTest || !isTestWatch) {
		// tslint support
		config.module.rules.push({
			test: /\.ts$/,
			enforce: 'pre',
			loader: 'tslint-loader'
		});
	}

	config.plugins = [
		new webpack.DefinePlugin({
			'process.env': { ENV: JSON.stringify(ENV) }
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			root('./src')
		),
		new webpack.LoaderOptionsPlugin({
			tslint: {
				emitErrors: false,
				failOnHint: false
			}
		})
	];

	if (!isTest) {
		config.plugins.push(
			new webpack.optimize.CommonsChunkPlugin({
				name: ['vendor', 'polyfills']
			}),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				chunksSortMode: 'dependency'
			}),
			new ExtractTextPlugin({ filename: 'css/[name].[hash].css' })
		);
	}

	config.devServer = {
		historyApiFallback: true,
		quiet: true,
		stats: 'minimal', // none (or false), errors-only, minimal, normal (or true) and verbose
		proxy: {
			"/api": {
				target: "http://localhost:3000", // to be changed by the good api url
				pathRewrite: {"^/api" : ""}
			}
		}
	};

	return config;
}();

// Helper functions
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}