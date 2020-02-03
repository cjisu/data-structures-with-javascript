function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList(element) {
  this.head = new Node(element);
  this.find = find;
  this.findPrevious = findPrevious;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
}

function find(item) {
  let currentNode = this.head;
  while (currentNode.element !== item) {
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
  const newNode = new Node(newItem);
  const current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function remove(item) {
  let node = this.findPrevious(item);
  if (node.next !== null) {
    node.next = node.next.next;
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

const LList = new LinkedList(1);
LList.insert(2);
LList.insert(3);
LList.insert(4);
LList.display();
console.log("find n3", LList.find(3));
LList.remove(5);
LList.display();
LList.remove(4);
LList.display();
