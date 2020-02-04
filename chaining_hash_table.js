function HashTable() {
  // [] 로 하면 안됨 Array 파악 필요 함
  this.table = new Array(137);
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
  const pos = this.betterHash(key);
  if (this.table[pos] === undefined) {
    this.table[pos] = [[key, data]];
  } else {
    const idx = this.table[pos].map(e => e[0]).indexOf(key);

    if (idx === -1) {
      this.table[pos].push([key, data]);
    } else {
      this.table[pos][idx] = [key, data];
    }
  }
}

function showDistro() {
  this.table.forEach(e => {
    console.log(e);
  });
}

function get(key) {
  const pos = this.betterHash(key);
  if (this.table[pos] === undefined) {
    return undefined;
  }

  const filters = this.table[pos].filter(d => d[0] === key);
  if (filters.length === 0) {
    return undefined;
  }

  return filters[0][1];
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
