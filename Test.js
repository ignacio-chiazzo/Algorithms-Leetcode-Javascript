/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
const fs = require("fs");

const TESTS_FOLDERS = [
  // "./LeetcodeProblemsTests/Algorithms/easy/",
  "./LeetcodeProblemsTests/Algorithms/medium/"
  // "./LeetcodeProblemsTests/Algorithms/hard/"
]

const REGEX_PATTERN_HIDDEN_FILES = /(^|\/)\.[^\/\.]/g;

var test_all = async function () {
  try {
    console.log("problems");
    const problems = await loadProblemsFiles();
    // console.log(problems);
    for (i in problems) {
      console.log("Solving: " + problems[i]);

      const tests = require(problems[i]);  
      console.log("*" * 100);
      if (Object.keys(tests).length == 0) {
        console.warn("🔴 The problem " + problems[i] + " doesn't have a test method implemented.\n");
        continue;
      }
      for(testIdx in tests) {
        tests[testIdx]();
      }
      console.log("✅ Tests for " + problems[i] + " run successfully \n");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

var loadProblemsFiles = () => {
  return new Promise(function (resolve, reject) {
    const problems = [];
    
    for(i in TESTS_FOLDERS) {
      folder = TESTS_FOLDERS[i];
      fs.readdir(folder, (error, files) => {
        if (error) {
          console.log("........................................................................");
          reject(error);
        } else {
          console.log(folder);
          new_problems = files.filter((item) => !REGEX_PATTERN_HIDDEN_FILES.test(item));
          new_problems = new_problems.map((item) => folder + item);
          // console.log(new_problems);
          resolve(new_problems);
        }
      });
    }
  });
};

test_all();
