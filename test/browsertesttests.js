var browsertest = require('../browsertest.js').browsertest,
	should = require('should'),
	assert = require('assert');

describe('browser tests', function () {

	it('should', function (done) {
		browsertest("file:///home/liam/work/browser-js-testing/tests.html",
			function (browser) {
				var failures = browser.text("li.failures em");
				var passes = browser.text("li.passes em");
				var errors = browser.html('div.test.fail h2, div.test.fail pre.error');
				var result = parseInt(failures) === 0;
				var message = "Failures: " + failures + "\n" + 
					"Passes: " + passes + "\n" + 
					errors;
				if (!result) console.log(message);
				return {result: result, message: message};			
			},
			"Tests failed!", function() { 
				done();
			});
	});

});