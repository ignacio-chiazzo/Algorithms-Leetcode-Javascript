let obj = { name: "rabo", detail: { age: 70, bank: { byy: 6667, num: 6667 } } };
const allProperties = (obj) => {
  for (let prop in obj) {
    if (typeof obj[prop] !== "object") {
      console.log(prop + " " + obj[prop] + "");
    } else {
      allProperties(obj[prop]);
    }
  }
};
console.log(allProperties(obj));
