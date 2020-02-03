function Dictionary() {
  this.dataStore = [];
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
}

function add(key, value) {
  this.dataStore[key] = value;
}

function find(key) {
  return this.dataStore[key];
}

function remove(key) {
  delete this.dataStore[key];
}

function showAll() {
  Object.keys(this.dataStore).forEach(e => {
    console.log("key : ", e, "value : ", this.dataStore[e]);
  });
}

const dict = new Dictionary();
dict.add("c", 1);
dict.add("j", 2);
dict.add("i", 3);
dict.add("s", 4);
dict.add("u", 5);
dict.showAll();
