var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(isObject(item)) {
    item = JSON.stringify(item);
  }
  this._storage[item] = undefined;
};

setPrototype.contains = function(item) {
  let found = false, num;

  _.each(this._storage, (value, prop) => {

    if(isObject(item)) {
      found = JSON.stringify(item) === prop;
      return;
    }

    if(item.toString() === prop) {
      found = true;
      return;
    }
  });

  return found;
};

setPrototype.remove = function(item) {

  if(isObject(item)) {
    item = JSON.stringify(item);
  }

  delete this._storage[item];
};

let isObject = function (obj) {
  return typeof(obj) === "object"
    && !Array.isArray(obj)
    && obj !== null
    && obj !== ""
    && !(obj instanceof String);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
