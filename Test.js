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

const getAllTests = async function (paths) {
  let problems = [];
  for(const i in paths) {
    const folder = paths[i];
    const newProblems = await loadProblemsFiles(folder); // await
    problems = problems.concat(newProblems);
  }
  return problems;
};

const runAllTests = async function (problems) {
  try {
    console.log(problems);
    var solvePromises = problems.map(solveProblem);
    
    await Promise.all(solvePromises);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const solveProblem = (problem) => {
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
        newProblems = files.filter((item) => !REGEX_PATTERN_HIDDEN_FILES.test(item));
        newProblems = newProblems.map((item) => folder + item);

        resolve(newProblems);
      }
    });
  });
};

const getMissingTests = async function (tests, problems) {
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

async function runScript() {
  if (process.argv.length > 2) {
    const path = process.argv.pop();
    solveProblem(path);
  } else {
    const problems = await getAllTests(PROBLEMS_FOLDERS);
    const tests = await getAllTests(TESTS_FOLDERS);
  
    await runAllTests(tests);
    await getMissingTests(tests, problems);
  }
}

runScript();