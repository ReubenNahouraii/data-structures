var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Node(value));
};

treeMethods.contains = function(target) {

  if(this.value === target) {
    return true;
  }

  let nodesArray = this.children,
    node;
  while(nodesArray.length) {
    node = nodesArray.shift();
    if(node.value === target) {
      return true;
    }
    nodesArray = nodesArray.concat(node.children);
  }

  return false;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.children = [];

  _.extend(node, treeMethods);
  return node;
};



/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
