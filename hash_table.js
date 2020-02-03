function HashTable() {
  // [] 로 하면 안됨 Array 파악 필요 함
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  // this.get = get;
}

function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }

  return total % this.table.length;
}

function put(data) {
  const pos = this.simpleHash(data);
  this.table[pos] = data;
}

function showDistro() {
  this.table.forEach(e => {
    console.log(e);
  });
}

const hTable = new HashTable();
hTable.put("sunset");
// 충돌 테스트
hTable.put("ssetun");
hTable.put("noeul");
hTable.showDistro();
