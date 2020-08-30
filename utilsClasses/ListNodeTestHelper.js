const assert = require('assert');

var assertList = function(list, expectedArr) {
  assert.strictEqual(list.length(), expectedArr.length);
  for(var i = 0; i < expectedArr.length; i++) {
    assert.strictEqual(list.val, expectedArr[i]);
    list = list.next;
  }

  assert(list)
}

module.exports.assertList = assertList;