function HashTable() {
  // [] 로 하면 안됨 Array 파악 필요 함
  this.table = new Array(137);
  this.values = new Array(137);
  this.showDistro = showDistro;
  this.betterHash = betterHash;
  this.put = put;
  this.get = get;
}

function betterHash(key) {
  const H = 37;
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += H * total + key.charCodeAt(i);
  }

  total = total % this.table.length;
  return total;
}

function put(key, data) {
  let pos = this.betterHash(key);

  if (this.table[pos] === undefined || this.table[pos] === key) {
    this.table[pos] = key;
    this.values[pos] = data;
  } else {
    while (this.table[pos] !== undefined) {
      pos++;
    }
    this.table[pos] = key;
    this.values[pos] = data;
  }
}

function showDistro() {
  this.table.forEach(e => {
    console.log(e);
  });
}

function get(key) {
  let pos = this.betterHash(key);
  if (this.table[pos] === undefined) {
    return undefined;
  }

  while (this.table[pos] !== key) {
    pos++;
  }

  return this.values[pos];
}

const hTable = new HashTable();
hTable.put("sunset", 1);
hTable.put("sunset", 2);
hTable.put("sunset", 3);
hTable.put("setsun", 4);
hTable.put("noeul", 5);
hTable.put("eulno", 6);
hTable.showDistro();

console.log(hTable.get("sunset"));
console.log(hTable.get("sunset2"));
console.log(hTable.get("sunset3"));
console.log(hTable.get("setsun"));
console.log(hTable.get("noeul"));
