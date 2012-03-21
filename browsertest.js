var Browser = require('zombie'),
	assert = require('assert'),
	growl = require('growl');

module.exports.browsertest = function (urls, pagePredicate, failedMessage) {
	var browser = new Browser();

	urls.forEach(function (url) {

		browser.visit(url, function (/* TODO find what params go here and why this func is not called */) {
console.log("visited" + url);
			var result = pagePredicate(browser);
			if (!result) {
				growl(failedMessage);
			}

		});

	});

};