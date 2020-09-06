/*
Simplify Path
https://leetcode.com/problems/simplify-path/description/

Given an absolute path for a file (Unix-style), simplify it. 

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
path = "/a/../../b/../c//.//", => "/c"
path = "/a//b////c/d//././/..", => "/a/b/c"

In a UNIX-style file system, a period ('.') refers to the current directory, so it can be ignored in a simplified path. Additionally, a double period ("..") moves up a directory, so it cancels out whatever the last directory was. For more information, look here: https://en.wikipedia.org/wiki/Path_(computing)#Unix_style

Corner Cases:

Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".
*/


var simplifyPath = function(path) {
  var queue = [];
  var iter = path.length - 1; 
  while(iter >= 0) {
    if(path.charAt(iter) === "/") {
      iter--;
    } else if(path.slice(iter - 1, iter + 1) == "/.") {
       iter -= 2;
    } else if(path.slice(iter - 2, iter + 1) === "/..") {  
        iter -= 3;    
        queue.unshift("/..");
    } else { // it's a characteriter
      const endChars = iter;
      while(iter >= 0 && path.charAt(iter) !== "/") {
        iter--;
      }
      if(queue.length > 0 && queue[0] === "/..") {
        queue.shift();
      } else {
        queue.push("/" + path.slice(iter + 1, endChars + 1));
      }
    }
  }
  var ret = "";
    
  while(queue.length > 0) {
    elem = queue.shift();
    if(elem == "/..") {
      while(queue.length > 0 && queue.shift == "/..") {
        elem += "/..";
      }
      elem = (queue.length > 0) ? elem : "";
    } else {
      ret = elem + ret;
    }
  }
  return (ret.length == 0) ? "/" : ret;
};

module.exports.simplifyPath = simplifyPath;
