exports.config = {
	baseUrl: 'http://localhost:8080/',
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

	specs: [
		'src/**/*.e2e-spec.js'
	],
	exclude: [],

	framework: 'jasmine2',

	allScriptsTimeout: 110000,

	jasmineNodeOpts: {
		showTiming: true,
		showColors: true,
		isVerbose: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 400000
	},
	directConnect: true,

	capabilities: {
		'browserName': 'chrome'
	},

	onPrepare: function () {
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
				savePath: 'screenshots'
			})
		)
	},

	/**
	 * Angular 2 configuration
	 *
	 * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
	 * `rootEl`
	 *
	 */
	useAllAngular2AppRoots: true
};