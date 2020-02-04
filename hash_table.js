function HashTable() {
  // [] 로 하면 안됨 Array 파악 필요 함
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.putWithSimple = putWithSimple;
  this.get = get;
}

function simpleHash(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }

  return total % this.table.length;
}

function betterHash(key) {
  const H = 37;
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += H * total + key.charCodeAt(i);
  }
  // 최종 합계를 배열의 크기로 나눈 나머지 값
  total = total % this.table.length;
  return total;
}

function putWithSimple(key, data) {
  const pos = this.simpleHash(key);
  this.table[pos] = data;
}

function put(key, data) {
  const pos = this.betterHash(key);
  this.table[pos] = data;
}

function showDistro() {
  this.table.forEach(e => {
    console.log(e);
  });
}

function get(key) {
  return this.table[this.betterHash(key)];
}

const hTableWithSimple = new HashTable();
hTableWithSimple.putWithSimple("sunset", 1);
// 충돌 테스트
hTableWithSimple.putWithSimple("ssetun", 2);
hTableWithSimple.putWithSimple("noeul", 3);
console.log("simple hash");
hTableWithSimple.showDistro();

const hTable = new HashTable();
hTable.put("sunset", 1);
hTable.put("ssetun", 2);
hTable.put("noeul", 3);
console.log("better hash");
hTable.showDistro();
console.log(hTable.get("sunset"));
