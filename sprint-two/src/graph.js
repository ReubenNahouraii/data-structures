

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.index = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes[this.index++] = new gNode(value);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return this.findNode(value).node !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  delete this.nodes[this.findNode(value).prop];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  let nodeFrom = this.findNode(fromValue).node,
    nodeTo = this.findNode(toValue).node;

  // debugger;
  let hasEdge = false;
  nodeFrom.connected.forEach(value => {
    if(value === nodeTo) {
      hasEdge = true;
      return;
    }
  });

  return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  let nodeFrom = this.findNode(fromValue).node,
    nodeTo = this.findNode(toValue).node;

  nodeFrom.connected.push(nodeTo);
  nodeTo.connected.push(nodeFrom);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  let nodeFrom = this.findNode(fromValue).node,
    nodeTo = this.findNode(toValue).node;

  let removeIndex = null;
  nodeFrom.connected.forEach((value, index) => {
    if(value === nodeTo) {
      removeIndex = index;
      return;
    }
  });

  if(removeIndex === null) {
    return;
  }

  nodeFrom.connected.splice(removeIndex, 1);

  nodeTo.connected.forEach((value, index) => {
    if(value === nodeFrom) {
      removeIndex = index;
      return;
    }
  });

  nodeTo.connected.splice(removeIndex, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, (node) => {
    cb(node.value);
  });
};

// find and returns an object with property number and node
Graph.prototype.findNode = function(value) {

  let nodeMeta = {};
  _.each(this.nodes, (node, prop) => {
    if (value === node.value) {
      nodeMeta.prop = prop;
      nodeMeta.node = node;

      return;
    }
  });

  return nodeMeta;
};

/*
 * Complexity: What is the time complexity of the above functions? not fast?
 *
 */


var gNode = function(value) {
  this.value = value;
  this.connected = [];
};

