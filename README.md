Browser Test
========

Server-side testing of browser dependent JavaScript. 

Write page-based javascript tests using a framework such as mocha or jasmine. Browsertest uses node and a headless browser (zombie.js) to load the test page and inspect the results. 

Install
-------

debian linuxes (ubuntu etc):sudo apt-get install libnotify-bin (for notifications)

npm install 

If you get errors installing zombie.js see [their website](http://zombie.labnotes.org/).

npm link

(change to your project directory)

npm install browsertest

Usage
-----

The browsertest module exposes a single function, browsertest, which accepts an 'options' object such as:

    browsertest({
    	url: 'file:///home/liam/work/browser-js-testing/tests.html',
    	failedMessage: 'something broke',
    	pagePredicate: function (browser) { // browser is a zombie.js browser
    		return { 
    			result: false, 
    			message: 'noooooooo'
    		};
    	},
    	callback: function () {} // called when finished
    });

The `failedMessage` and `pagePredicate` properties are optional. If not supplied, mocha is assumed as the page testing framework. 

For mocha tests it can be used like this:

    var browsertest = require('../browsertest.js').browsertest,
    	should = require('should'),
    	assert = require('assert');
    
    describe('browser tests', function () {
    
    	it('should properly report the result of a mocha test page', function (done) {
    		browsertest({
    			url: "file:///home/liam/work/browser-js-testing/tests.html",
    			callback: function() { 
    				done();
    			}
    		});
    	});
    
    });

For other browser test tools define a 'pagePredicate' property on the options hash that returns { result: <bool>, message: <string> }

Running the Tests
-----------------

To run the included tests make sure you are in the root of the project, and run:

    mocha -t 5000

where 5000 is the test timeout in milliseconds.
