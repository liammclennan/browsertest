var browsertest = require('../browsertest.js').browsertest,
	should = require('should'),
	assert = require('assert');

describe('browser tests', function () {

	it('should properly report the result of a mocha test page', function (done) {
		browsertest({
			url: "file://" + __dirname + "/tests.html",
			callback: function() { 
				done();
			}
		});
	});

});