function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList(element) {
  this.head = new Node(element);
  this.head.next = this.head;
  this.find = find;
  this.findPrevious = findPrevious;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
}

function find(item) {
  let currentNode = this.head;
  while (currentNode.element !== item) {
    if (currentNode.next === this.head) {
      break;
    } else {
      currentNode = currentNode.next;
    }
  }
  return currentNode;
}

function findPrevious(item) {
  let currentNode = this.head;
  while (currentNode.next !== this.head && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }

  return currentNode;
}

function insert(newItem, item) {
  const newNode = new Node(newItem);
  const current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function remove(item) {
  const node = this.findPrevious(item);
  if (node.next !== this.head) {
    node.next = node.next.next;
  }
}

function display() {
  let currentNode = this.head;
  do {
    console.log("element : ", currentNode.element);
    console.log("next : ", currentNode.next.element);
    currentNode = currentNode.next;
  } while (currentNode.next !== this.head);
  console.log("element : ", currentNode.element);
  console.log("next : ", currentNode.next.element);
}

const LList = new LinkedList(1);
LList.insert(2);
LList.insert(3);
LList.display();
LList.insert(4);
// LList.remove(2);
// LList.display();
