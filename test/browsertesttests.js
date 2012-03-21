browsertest = require('../browsertest.js').browsertest;

describe('browser tests', function () {

	it('should', function () {
		browsertest(["file:///home/liam/work/browser-js-testing/tests.html"],
			function (browser) {
				var failures = browser.text("li.failures em");
				var passes = browser.text("li.passes em");
				var errors = browser.html('div.test.fail h2, div.test.fail pre.error');
				console.log("Passes: " + passes);
				console.log("Failures: " + failures);
				console.log("Errors: " + errors);
				return parseInt(failures) > 0;
			},
			"Tests failed!");
	});

});