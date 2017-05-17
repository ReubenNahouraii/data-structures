var Stack = function() {
  var someInstance = {
    count : 0,
    storage : {}
  };
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.count++] = value;
  };

  someInstance.pop = function() {
    if (someInstance.count > 0) {
      someInstance.count--;
      return someInstance.storage[someInstance.count];
    }
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
