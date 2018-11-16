const fs = require('fs');

const PROBLEMS_FOLDER = './LeetcodeProblems/';
const REGEX_PATTERN_HIDDEN_FILES = /(^|\/)\.[^\/\.]/g;

var main = async function() {
  try {
    const problems = await loadProblems();
    for(i in problems) { 
      console.log("Solving: " + problems[i] + ":");
      const problem = require(PROBLEMS_FOLDER + problems[i]);
      problem.main();
      console.log("End of the solution for : " + problems[i] + ",\n\n");
    }
  } catch (error) {
    throw new Error(error);
  }
}

var loadProblems = () => {
  return new Promise(function (resolve, reject) {
    fs.readdir(PROBLEMS_FOLDER, (error, files) => {
      if (error) {
        reject(error);
      } else {
	problems = files.filter(item => !(REGEX_PATTERN_HIDDEN_FILES).test(item));
	resolve(problems);
      }
    })
  });
}

main();
