exports.TestArray = function(len) {
  this.dataStore = [];
  this.pos = len;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.setData(len);
};

function setData(len) {
  for (let i = 0; i < len; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (len + 1));
  }
}

function clear() {
  this.dataStore = [];
  this.pos = 0;
}

function insert(e) {
  this.dataStore[this.pos++] = e;
}

function toString() {
  console.log(this.dataStore.join(","));
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
