const assert = require('assert');

var test = function() {
  assert.equal(search([4,5,6,7,0,1,2], 5), 1);
}

module.exports.test = test;
