//Given to crystal balls that will break if dropped from high enough distance,
//determine the exact spot in which it will break in most optimized way.
const twoCrystalBall = (breaks) => {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmount;
  for (; i < breaks.length; i++) {
    if (breaks[i]) {
      break;
    }
  }
  i--;
  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
};
console.log(twoCrystalBall(["f", "f", "f", "t", "f", "f", "f", "f", "t"]));
console.log(twoCrystalBall(["f", "f", "f", "t", "f"]));
