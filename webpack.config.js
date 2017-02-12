var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig() {

	var config = {};

	config.devtool = 'eval-source-map';

	config.entry = {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	};

	config.output = {
		path: root('dist'),
		publicPath: 'http://localhost:8080/',
		filename: 'js/[name].js',
		chunkFilename: '[id].chunk.js'
	};

	config.resolve = {
		extensions: ['.ts', '.js']
	};

	config.module = {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					{
						loader: 'awesome-typescript-loader'
					},
					'awesome-typescript-loader'
				],
				exclude: /node_modules\/(?!(ng2-.+))/
			},
			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: [root('src/index.html')]
			}
			// {
			// 	test: /\.html$/,
			// 	loader: 'html-loader'
			// }
		]
	};

	config.plugins = [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			root('./src'),
			{} // a map of your routes
		),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'polyfills']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			chunksSortMode: 'dependency'
		})
	];

	return config;
}();

// Helper functions
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}