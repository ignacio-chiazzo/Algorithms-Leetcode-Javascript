/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
const fs = require("fs");

const PROBLEMS_FOLDERS = [
  "./LeetcodeProblems/Algorithms/easy/",
  "./LeetcodeProblems/Algorithms/medium/",
  "./LeetcodeProblems/Algorithms/hard/"
];

const TESTS_FOLDERS = [
  "./LeetcodeProblemsTests/Algorithms/easy/",
  "./LeetcodeProblemsTests/Algorithms/medium/",
  "./LeetcodeProblemsTests/Algorithms/hard/"
];

const REGEX_PATTERN_HIDDEN_FILES = /(^|\/)\.[^\/\.]/g;

const get_all_tests = async function (paths) {
  let problems = [];
  for(const i in paths) {
    const folder = paths[i];
    const new_problems = await loadProblemsFiles(folder); // await
    problems = problems.concat(new_problems);
  }
  return problems;
};

const test_all = async function () {
  try {

    const problems = await get_all_tests(TESTS_FOLDERS);
    console.log(problems);
    var solvePromises = problems.map(solve);
    
    await Promise.all(solvePromises);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const solve = (problem) => {
  try {
    console.log("Solving: " + problem);

    const tests = require(problem);  
    console.log("*".repeat(100));
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
};

const loadProblemsFiles = (folder) => {
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

const get_missing_tests = async function () {
  const tests = await get_all_tests(TESTS_FOLDERS);
  const problems = await get_all_tests(PROBLEMS_FOLDERS);

  const hasTestStatus = problems.reduce((status, problemPath) => {
    const baseIndex = PROBLEMS_FOLDERS.findIndex((basePath) =>
      problemPath.startsWith(basePath)
    );

    let testPath = problemPath
      .replace(PROBLEMS_FOLDERS[baseIndex], TESTS_FOLDERS[baseIndex])
      .replace(/\.js$/, "_Test.js");
    
    status.push({
      problem: problemPath,
      hasTest: tests.includes(testPath)
    });

    return status;
  }, []);
  const missingTests = hasTestStatus.filter((stat) => !stat.hasTest);
  console.log("Total Problems:", problems.length);
  console.log("Missing Tests:", missingTests.length);

  if(missingTests.length) {
    console.table(missingTests);
  }
};

if (process.argv.length > 2) {
  const path = process.argv.pop();
  solve(path);
} else {
  test_all();
  get_missing_tests();
}
 