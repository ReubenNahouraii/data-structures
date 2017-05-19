var BinarySearchTree = function(value) {
  value = value || 10;
  let bstree = {};
  bstree.value = value;
  bstree.left = null;
  bstree.right = null;

  _.extend(bstree, bstMethods);
  return bstree;
};

let bstMethods = {};
bstMethods.insert = function(value) {
  let node = this;

  while(node) {
    if(value > node.value) { // value is greater than node, go right
      if(!node.right) {
        node.right = bNode(value);
        break;
      } else {
        node = node.right;
      }
    } else { // value is less than node, go left
      if(!node.left) {
        node.left = bNode(value);
        break;
      } else {
        node = node.left;
      }
    }
  }
};

bstMethods.contains = function(target) {

  let node = this;

  while(node) {
    if(node.value === target) {
      return true;
    }
    node = target > node.value ? node.right : node.left;
  }

  return false;
};

bstMethods.depthFirstLog = function(func) {

  let node = this;

  let recurse = function(node) {
    if(!node) {
      return;
    }
    func(node.value);
    recurse(node.left);
    recurse(node.right);
  };

  recurse(node);
};

bstMethods.breadthFirstLog = function(fn) {

  let que = [this];

  let node;
  while(que.length) {

    node = que.shift();
    if(!node) {
      continue;
    }

    fn(node.value);
    que.push(node.left, node.right);
  }
};

var bNode = function(value) {
  var node = {};

  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? O(log n) -- insert and contains, n -- depthFirstLog
 */
