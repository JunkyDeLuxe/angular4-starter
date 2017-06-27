var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

const extractCSS = new ExtractTextPlugin({ filename: 'css/[name].[hash].css' });

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';
var isTest = ENV === 'test' || isTestWatch;
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {

	var config = {};

	if (isProd) {
		config.devtool = 'source-map';
	}
	else if (isTest) {
		config.devtool = 'inline-source-map';
	}
	else {
		config.devtool = 'eval-source-map';
	}

	if (!isTest) {
		config.entry = isTest ? {} : {
			'polyfills': './src/polyfills.ts',
			'vendor': './src/vendor.ts',
			'app': './src/main.ts'
		};
	}

	config.output = isTest ? {} : {
		path: root('dist'),
		publicPath: isProd ? '/' : 'http://localhost:8080/',
		filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
		chunkFilename: isProd ? '[id].[hash].chunk.js' : '[id].chunk.js'
	};

	config.resolve = {
		extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
	};

	var atlOptions = '';

	if (isTest && !isTestWatch) {
		atlOptions = 'inlineSourceMap=true&sourceMap=false';
	}

	config.module = {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader?' + atlOptions,
						options: { useCache: !isProd }
					},
					{
						loader: 'angular2-template-loader'
					}
				],
				exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
			},
			{
				test: /\.(png|jpe?g|gif|svg|otf|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{ loader: 'file-loader?name=fonts/[name].[hash].[ext]?' }
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{ loader: 'file-loader?name=img/[name].[hash].[ext]?' }
				]
			},
			{
				test: /app\.module\.scss$/,
				loader: extractCSS.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
				})
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{ loader: 'raw-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap' }
				],
				exclude: /app\.module\.scss$/
			},
			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: [root('src/index.html')]
			},
			{
				test: /\.json$/,
				use: 'json-loader'
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
			/angular(\\|\/)core(\\|\/)@angular/,
			root('./src')
		),
		new webpack.LoaderOptionsPlugin({
			tslint: {
				emitErrors: false,
				failOnHint: false
			}
		})
	];

	if (isProd) {
		config.plugins.push(
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.optimize.UglifyJsPlugin({sourceMap: true, mangle: { keep_fnames: true }}),
			new CopyWebpackPlugin([{
				from: root('public'),
				to: 'public'
			}])
		);
	}

	if (!isTest) {
		config.plugins.push(
			new webpack.optimize.CommonsChunkPlugin({
				name: ['vendor', 'polyfills']
			}),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				chunksSortMode: 'dependency'
			}),
			extractCSS
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