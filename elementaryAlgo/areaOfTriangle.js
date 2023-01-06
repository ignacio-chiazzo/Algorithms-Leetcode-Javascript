//Example 1: Area When Base and Height is Known
const areaBaseHeight = (base, height) => {
  let area = (base * height) / 2;
  return area;
};
console.log(areaBaseHeight(2, 3));
console.log(areaBaseHeight(3, 6));
//Example 2: Area When All Sides are Known
//s = (a+b+c)/2
//area = √(s(s-a)*(s-b)*(s-c))
const areaAllSidesKnown = (side1, side2, side3) => {
  let s = (side1 * side2 * side3) / 2;
  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  return area;
};
console.log(areaAllSidesKnown(2, 3, 6));
