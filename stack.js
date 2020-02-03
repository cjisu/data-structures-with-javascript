function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.peek = peek;
  this.pop = pop;
  this.push = push;
}

function peek() {
  return this.dataStore[this.top - 1];
}

function pop() {
  if (this.top > 0) {
    return this.dataStore[this.top--];
  }
}

function push(element) {
  this.dataStore[this.top++] = element;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("current stack : ", stack.dataStore);
stack.pop();
console.log("current stack : ", stack.dataStore);
stack.pop();
console.log("current stack : ", stack.dataStore);
stack.pop();
console.log("current stack : ", stack.dataStore);
stack.pop();
console.log("current stack : ", stack.dataStore);
stack.pop();

console.log("current top : ", stack.top);
