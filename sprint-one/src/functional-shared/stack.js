var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {
    count : 0,
    storage : {}
  };

  extend(stack, stackMethods);

  return stack;
};

let stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count++] = value;

};

stackMethods.pop = function(value) {
  if (!this.count) {
    return;
  }

  return this.storage[--this.count];
};

stackMethods.size = function() {
  return this.count;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



