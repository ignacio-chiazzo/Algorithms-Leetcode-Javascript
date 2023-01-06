let obj = { name: "random", email: "random@example.com" };
const result = Object.create(obj);
result.age = 800;
result.speak = function () {
  return `My name is ${this.name} and I am ${this.age} years old.`;
};
console.log(result);
console.log(result.name);
console.log(result.age);
console.log(result.hasOwnProperty("name"));
console.log(result.hasOwnProperty("age"));
console.log(result.hasOwnProperty("speak"));
console.log(result.speak());
let protoRabbit = {
  speak(line) {
    return `The ${this.type} rabbit says '${line}'`;
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
console.log(killerRabbit.hasOwnProperty("type"));
console.log(killerRabbit.speak("SKREEEE!"));
// → The killer rabbit says 'SKREEEE!
function factoryFunc(key, value) {
  return {
    key,
    value,
  };
}
let factory = new factoryFunc("age", 78);
console.log(factory.value);
console.log(factory.hasOwnProperty("value"));
function facFunc(key, value) {
  this[key] = value;
}
const fa = new facFunc("name", 800);
console.log(fa.name);
class Constr {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}
const ob = { name: "hello" };
for (let key in ob) {
  if (ob.hasOwnProperty(key)) {
    console.log(key);
  }
}

for (let key of Object.keys(ob)) {
  if (ob.hasOwnProperty(key)) {
    console.log(key);
  }
}
Object.keys(ob).forEach((key) => {
  if (ob.hasOwnProperty(key)) {
    console.log(key);
  }
});
const countKey = (obj) => {
  let count = 0;
  Object.keys(obj).forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      count += 1;
    }
  });
  return count;
};
console.log(countKey(ob));
console.log(Object.create(obj).toString());
console.log(Object.create(null));
let valuePairs = [
  ["0", 0],
  ["1", 1],
  ["2", 2],
];
let objPair = Object.fromEntries(valuePairs);
console.log(objPair);
let map = new Map([
  ["age", 80],
  ["name", "rabo"],
]);
let mapPair = Object.fromEntries(map);
console.log(mapPair);
for (let [key, value] of map) {
  console.log(key, value);
}
console.log(new Set([8, 9, 0]));
// let obj1 = {age: 56},
// obj2 = {col: 'red'};
// obj1.setPrototypeOf(obj2)
const obj1 = { a: 1 };
const obj2 = { b: 2 };
Object.setPrototypeOf(obj2, obj1);
//obj2.__proto__ = obj1;
console.log(obj1.isPrototypeOf(obj2));
let objWithGetSet = {};
let o = Object.defineProperty(objWithGetSet, "data", {
  data: 0,
  get() {
    return this.value;
  },
  set(value) {
    this.value = value;
  },
});
o.data = 90;
