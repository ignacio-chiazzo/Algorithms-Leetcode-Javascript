const obj = { name: "rabo", description: "black and brain" };
//shallow copy
let shallow = { ...obj };
console.log(shallow);
//shallow copy and add properties
let shallowCopy = { ...obj, age: 0 };
console.log(shallowCopy);
//shallow copy by Object.assign();
let shallowAssign = Object.assign({}, obj, { country: "nigeria" });
console.log(shallowAssign);
//stringify
let dee = { age: 67, email: "rab@gmail.com", desp: { num: 0 } };
let fee = dee;
//console.log(fee.desp === dee.desp);
let copy = JSON.stringify(dee);
console.log(copy);
let copyByJSON = JSON.parse(copy);
//becasue of deep clone these two objects are not the same object
console.log(copyByJSON.desp === dee.desp);
//deep copy: JavaScript do not has a deep copy method but we can implement it
function deepCopy(obj) {
  if (!obj) return obj;
  let copyObj = {};
  for (let key in copyObj) {
    if (typeof obj[key] !== "object" || Array.isArray(obj[key])) {
      copyObj[key] = obj[key];
    } else {
      copyObj[key] = deepCopy(obj[key]);
    }
  }
  return copyObj;
}
let t = { name: "rabo", details: { col: "black" } };
console.log(deepCopy(t));
