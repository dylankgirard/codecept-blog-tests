exports.config = {
	tests: './tests/*_test.js',
	output: './output',
	helpers: {
		Puppeteer: {
			url: 'https://girard-blog.netlify.app/',
			show: true,
			windowSize: '1200x900',
			waitForNavigation: 'networkidle0',
			waitForAction: 500,
		},
	},
	include: {
		I: './steps_file.js',
	},
	bootstrap: null,
	mocha: {},
	name: 'codecept-test',
	plugins: {
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
		},
		tryTo: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
	},
};
