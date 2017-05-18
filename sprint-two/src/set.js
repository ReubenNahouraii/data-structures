var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = undefined;

};

setPrototype.contains = function(item) {
  let found = false;
  _.each(this._storage, (value, prop) => {
    if (item === prop) {
      found = true;
      return;
    }
  });
  return found;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
