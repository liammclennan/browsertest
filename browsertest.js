var Browser = require('zombie'),
	assert = require('assert'),
	growl = require('growl');

module.exports.browsertest = function (url, pagePredicate, failedMessage, callback) {
	var browser = new Browser();

	browser.visit(url, function () {
		var result = pagePredicate(browser);
		if (!result.result) {
			growl(failedMessage);
			assert.ok(result.result, result.message);
		}
		callback();
	});
	

};
