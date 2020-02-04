function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LinkedList(element) {
  this.head = new Node(element);
  this.find = find;
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

function insert(newItem, item) {
  const newNode = new Node(newItem);
  const current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function remove(item) {
  const node = this.find(item);
  if (node.next !== null) {
    node.previous.next = node.next;
    node.next.previous = node.previous;
    node.next = null;
    node.previous = null;
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

    if (currentNode.previous) {
      console.log("previous : ", currentNode.previous.element);
    } else {
      console.log("previous : null");
    }

    currentNode = currentNode.next;
  }
}

const LList = new LinkedList(1);
LList.insert(2);
LList.insert(3);
LList.insert(4);
LList.display();
LList.remove(2);
LList.display();
