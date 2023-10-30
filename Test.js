/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
const fs = require("fs");

const TESTS_FOLDERS = [
  "./LeetcodeProblemsTests/Algorithms/easy/",
  "./LeetcodeProblemsTests/Algorithms/medium/",
  "./LeetcodeProblemsTests/Algorithms/hard/"
]

const REGEX_PATTERN_HIDDEN_FILES = /(^|\/)\.[^\/\.]/g;

var test_all = async function () {
  try {
    var problems = [];
    for(const i in TESTS_FOLDERS) {
      var folder = TESTS_FOLDERS[i];
      var new_problems = await loadProblemsFiles(folder); // await
      problems = problems.concat(new_problems);
    };
    console.log(problems);

    var solvePromises = problems.map(solve);
    
    await Promise.all(solvePromises)
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

var solve = (problem) => {
  try {
    console.log("Solving: " + problem);

    const tests = require(problem);  
    console.log("*" * 100);
    if (Object.keys(tests).length == 0) {
      console.warn("🔴 The problem " + problem + " doesn't have a test method implemented.\n");
      return;
    }
    for(testIdx in tests) {
      tests[testIdx]();
    }
    console.log("✅ Tests for " + problem + " run successfully \n");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

var loadProblemsFiles = (folder) => {
  return new Promise(function (resolve, reject) {
    fs.readdir(folder, (error, files) => {
      if (error) {
        reject(error);
      } else {
        console.log(folder);
        new_problems = files.filter((item) => !REGEX_PATTERN_HIDDEN_FILES.test(item));
        new_problems = new_problems.map((item) => folder + item);

        resolve(new_problems);
      }
    });
  });
};

test_all();
