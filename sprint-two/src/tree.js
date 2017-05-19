var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Node(value);
  child.parent = this.value === undefined ? null : this;
  this.children.push(child);
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

treeMethods.removeFromParent = function() {

  let removeIndex = -1;
  this.parent.children.forEach((nodeChild, index) => {
    if(nodeChild === this) {
      removeIndex = index;
      return;
    }
  });

  this.parent.children.splice(removeIndex, 1);
  this.parent = null;
  return this;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.parent = null;
  node.children = [];

  _.extend(node, treeMethods);
  return node;
};



/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
