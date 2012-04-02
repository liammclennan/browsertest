var browsertest = require('../browsertest.js').browsertest,
	should = require('should'),
	assert = require('assert');

describe('browser tests', function () {

	it('should properly report the result of a failing mocha test page', function (done) {
		var url = "file://" + __dirname + "/tests_fail.html"; 
		console.log(url);
		browsertest({
			url: url,
			callback: function() { 
				done();
			}
		});
	});	

	it('should properly report the result of a passing mocha test page', function (done) {
		var url = "file://" + __dirname + "/tests_pass.html"; 
		console.log(url);
		browsertest({
			url: url,
			callback: function() { 
				done();
			}
		});
	});

});