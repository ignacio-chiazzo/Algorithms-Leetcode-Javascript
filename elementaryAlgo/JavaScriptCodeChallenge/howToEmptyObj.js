let ob = { name: "9" };
for (let key in ob) {
  if (ob.hasOwnProperty(key)) {
    delete ob[key];
  }
}
console.log(ob);
