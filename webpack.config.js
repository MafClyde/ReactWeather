var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.js'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},

	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.js',
			Nav: 'app/components/Nav.js',
			Weather: 'app/components/Weather.js',
			WeatherForm: 'app/components/WeatherForm.js',
			WeatherMessage: 'app/components/WeatherMessage.js',
			About: 'app/components/About.js',
			Examples: 'app/components/Examples.js',
			openWeatherMap: 'app/api/openWeatherMap.js'
		},
		extensions: ['', '.js', '.jsx']
		
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/,
				exlude: /(node_modules|bower_components)/
			}
		]
	}
};