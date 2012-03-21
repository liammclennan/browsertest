var Browser = require('zombie'),
	assert = require('assert'),
	growl = require('growl'),
	defaultFailureMessage = 'Tests failed!';

function mochaPredicate (browser) {
	var failures = browser.text("li.failures em");
	var passes = browser.text("li.passes em");
	var errors = browser.html('div.test.fail h2, div.test.fail pre.error');
	var result = parseInt(failures) === 0;
	var message = "Failures: " + failures + "\n" + 
		"Passes: " + passes + "\n" + 
		errors;
	return {result: result, message: message};			
}

module.exports.browsertest = function (options) {
	var browser = new Browser();
	options.pagePredicate = options.pagePredicate || mochaPredicate;
	options.failedMessage = options.failedMessage || defaultFailureMessage;

	browser.visit(options.url, function () {
		var result = options.pagePredicate(browser);
		if (!result.result) {
			growl(options.failedMessage);
			assert.ok(result.result, result.message);
		}
		options.callback();
	});
	

};
