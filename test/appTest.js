const assert = require('chai').assert;
const parseURL = require('../app').parseURL;

// test data
const  url = ['http://maxh:123456@arisan.io:8000',
              'https://gooogle.com'
];
const  exp = [{
  'protocol': 'http',
  'host': 'arisan.io',
  'port': 8000,
  'username': 'maxh',
  'password': '123456'
}, {
  'protocol': 'https',
  'host': 'gooogle.com',
  'port': NaN,
  'userInfo': undefined
}];

let result1 = parseURL(url[0]);
let result2 = parseURL(url[1]);
let exp1    = exp[0];
let exp2    = exp[1];

describe ('App', function () {
  describe ('parseURL', function() {
    it ('parseURL should match the expectation info', function () {
      assert.equal(JSON.stringify(result1), JSON.stringify(exp1));
      assert.equal(JSON.stringify(result2), JSON.stringify(exp2));
    });

    it ('parseURL should be a JSON object', function () {
      assert.typeOf(result1, 'object');
      assert.typeOf(result2, 'object');
    });
  });

  describe ('port number', function () {
    it ('port number should match the right type', function () {
      assert.typeOf(result1['port'], 'number');
      assert.typeOf(result2['port'], 'number');
    });
  });
});





//
