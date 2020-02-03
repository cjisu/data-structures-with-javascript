function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList(node) {
  this.head = node;
  this.find = find;
  this.findPrevious = findPrevious;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
}

function find(item) {
  let currentNode = this.head;
  while (currentNode !== item) {
    if (!currentNode.next) {
      break;
    } else {
      currentNode = currentNode.next;
    }
  }
  return currentNode;
}

function findPrevious(item) {
  let currentNode = this.head;
  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }

  return currentNode;
}

function insert(newItem, item) {
  const current = this.find(item);
  newItem.next = current.next;
  current.next = newItem;
}

function remove(item) {
  let node = this.findPrevious(item);
  if (node.next !== null) {
    node.next = item.next.next;
  }
}

function display() {
  let currentNode = this.head;
  while (currentNode !== null) {
    console.log("element : ", currentNode.element);
    if (currentNode.next) {
      console.log("next : ", currentNode.next.element);
    } else {
      console.log("next : null");
    }
    currentNode = currentNode.next;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const LList = new LinkedList(n1);
LList.insert(n2);
LList.insert(n3);
LList.insert(n4);
LList.display();
console.log("find n3", LList.find(n3));
LList.remove(n5);
LList.display();
LList.remove(n4);
LList.display();
