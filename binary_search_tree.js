function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
}

function insert(data) {
  const n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    let current = this.root;
    while (true) {
      if (data > current.data) {
        if (current.right === null) {
          current.right = n;
          break;
        } else {
          current = current.right;
        }
      } else {
        if (current.left === null) {
          current.left = n;
          break;
        } else {
          current = current.left;
        }
      }
    }
  }
}

function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (node !== null) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
}

function find(data) {
  let current = this.root;
  while (current !== null) {
    if (current.data === data) {
      break;
    }

    if (current.data > data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  if (current === null) {
    return undefined;
  }

  return current.data;
}

function getMin() {
  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  let current = this.root;
  while (current.right !== null) {
    current = current.right;
  }

  return current.data;
}

function remove(data) {
  removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node === null) {
    return null;
  }

  if (data === node.data) {
    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }
  } else if (data > node.data) {
    node.right = removeNode(node.right, data);
    return node;
  } else {
    node.left = removeNode(node.left, data);
    return node;
  }
}
const bst = new BST();
bst.insert(44);
bst.insert(55);
bst.insert(11);
bst.insert(66);
bst.insert(22);
bst.insert(33);
console.log("inorder");
bst.inOrder(bst.root);
console.log("preorder");
bst.preOrder(bst.root);
console.log("postorder");
bst.postOrder(bst.root);
console.log("min");
console.log(bst.getMin());
console.log("max");
console.log(bst.getMax());
console.log("find 22");
console.log(bst.find(22));
console.log("find 88");
console.log(bst.find(88));
bst.remove(22);
console.log("inorder");
bst.inOrder(bst.root);
bst.remove(66);
console.log("inorder");
bst.inOrder(bst.root);
