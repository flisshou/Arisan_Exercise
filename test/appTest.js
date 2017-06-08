const assert = require('chai').assert;
const parseURL = require('../app').parseURL;

// test data
const  url = 'http://maxh:123456@arisan.io:8000';
const  exp = {
  'protocol': 'http',
  'host': 'arisan.io',
  'port': 8000,
  'username': 'maxh',
  'password': '123456'
};
let result = parseURL(url);

describe ('App', function () {
  describe ('parseURL', function() {
    it ('parseURL should match the expectation info', function () {
      assert.equal(JSON.stringify(result), JSON.stringify(exp));
    });

    it ('parseURL should be a JSON object', function () {
      assert.typeOf(result, 'object');
    });
  });

  describe ('port number', function () {
    it ('port number should be a number', function () {
      assert.typeOf(result['port'], 'number');
    });
  });
});





//
