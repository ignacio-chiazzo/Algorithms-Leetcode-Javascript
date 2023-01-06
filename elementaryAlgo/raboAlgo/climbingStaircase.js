//Given a staircase of n steps, count the number of distinct ways to climb to the top.
//you can either climb 1 step or 2 steps at a time
const climbingStaircase = (n) => {
  //number of ways
  let numOfWays = [1, 2];
  // start at i = 2; number of ways array have cover the initial positions of 0 and 1.
  //remember you are looping through n
  for (let i = 2; i <= n; i++) {
    //number of ways array following fibbonuci series pattern
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }
  //note numOfWays[n -1] because array index start from zero
  return numOfWays[n - 1];
};
console.log(climbingStaircase(5));
