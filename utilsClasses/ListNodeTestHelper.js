const assert = require('assert');

var assertList = function(list, expectedArr) {
  const listlength = list ? list.length() : 0;
  assert.strictEqual(listlength, expectedArr.length);
  for(var i = 0; i < expectedArr.length; i++) {
    assert.strictEqual(list.val, expectedArr[i]);
    list = list.next;
  }
}

module.exports.assertList = assertList;