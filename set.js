function Set() {
  this.dataStore = [];
  this.contains = contains;
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
}

function contains(data) {
  return this.dataStore.indexOf(data) === -1 ? false : true;
}

function add(data) {
  if (!this.contains(data)) {
    this.dataStore.push(data);
    return true;
  }
  return false;
}

function remove(data) {
  if (this.contains(data)) {
    this.dataStore.splice(idx, 1);
    return true;
  }
  return false;
}

function size() {
  return this.dataStore.length;
}

function union(set) {
  const tmpSet = new Set();
  this.dataStore.forEach(d => tmpSet.add(d));
  set.dataStore.forEach(e => {
    if (!this.contains(e)) {
      tmpSet.add(e);
    }
  });

  return tmpSet;
}

function intersect(set) {
  const tmpSet = new Set();
  set.dataStore.forEach(s => {
    if (this.contains(s)) {
      tmpSet.add(s);
    }
  });
  return tmpSet;
}

function subset(set) {
  if (set.dataStore.length < this.dataStore.length) {
    return false;
  }

  let res = true;
  this.dataStore.forEach(s => {
    if (!set.contains(s)) {
      res = false;
    }
  });

  return res;
}

function difference(set) {
  const tmpSet = new Set();
  this.dataStore.forEach(s => {
    if (!set.contains(s)) {
      tmpSet.add(s);
    }
  });

  return tmpSet;
}

const set1 = new Set();
const set2 = new Set();
const set3 = new Set();
set1.add(1);
set1.add(1);
set1.add(2);
set1.add(3);
set2.add(3);
set2.add(3);
set2.add(4);
set3.add(2);
console.log(set1.union(set2).dataStore);
console.log(set1.intersect(set2).dataStore);
console.log(set2.subset(set1));
console.log(set3.subset(set1));
console.log(set1.difference(set2).dataStore);
