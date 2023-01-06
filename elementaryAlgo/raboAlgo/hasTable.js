class HashTable {
  constructor(value) {
    this.table = new Array(value);
    this.size = value;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    total % this.size;
    return total;
  }
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let someItem = bucket.find((item) => item[0] === key);
      if (someItem) {
        bucket[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameItem = bucket.find((item) => item[0] === key);
      if (sameItem) {
        return sameItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const map = new HashTable(50);
map.set("name", 30);
map.set("u", "animals");
map.set("n", 300);
map.set("g", "ant");
map.set("a", 378);
map.set("b", "bulk");
console.log(map);
console.log(map.get("name"));
console.log(map.get("n"));
console.log(map.get("g"));
console.log(map.get("b"));
console.log(map.remove("a"));
map.display();
