const assert = require('assert');

var test = function() { 
  assert.equal(simplifyPath("/../c"), "/c");
  assert.equal(simplifyPath("/.."), "/");
  assert.equal(simplifyPath("/home/"), "/home"); // => "/home"
  assert.equal(simplifyPath("/a/./b/../../c/"), "/c"); // => "/c"
  assert.equal(simplifyPath("/a/../../b/../c//.//"), "/c"); // => "/c"
  assert.equal(simplifyPath("/a//b////c/d//././/.."), "/a/b/c") // => "/a/b/c"
}

module.exports.test = test;
