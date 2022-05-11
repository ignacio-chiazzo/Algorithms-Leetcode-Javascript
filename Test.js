const fs = require('fs');

const TESTS_FOLDER = './LeetcodeProblemsTests/Algorithms/';
const REGEX_PATTERN_HIDDEN_FILES = /(^|\/)\.[^\/\.]/g;

var test_all = async function() {
  try {
    const problems = await loadProblems();
    for(i in problems) {
      console.log("Solving: " + problems[i]);
      const problem = require(TESTS_FOLDER + problems[i]);

      if (typeof(problem.test) !=='undefined') {
        problem.test();
        console.log("✅ Tests for " + problems[i] + " run successfully \n");
      } else {
        console.warn(problem, "🔴 The problem " + problems[i] +  " doesn't have a test method implemented.\n");
      } 
    }
  } catch (error) {
    throw new Error(error);
  }
}

var loadProblems = () => {
  return new Promise(function (resolve, reject) {
    fs.readdir(TESTS_FOLDER, (error, files) => {
      if (error) {
        reject(error);
      } else {
        problems = files.filter(item => !(REGEX_PATTERN_HIDDEN_FILES).test(item));
        resolve(problems);
      }
    })
  });
}

test_all();
