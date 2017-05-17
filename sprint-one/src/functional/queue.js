var Queue = function() {
  var someInstance = {
    count : 0,
    head : 0,
    tail : 0,
    storage : {}
  };

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.tail++] = value;
    someInstance.count++;
  };

  someInstance.dequeue = function() {
    if(someInstance.count === 0) {
      return;
    }

    someInstance.count--;
    return someInstance.storage[someInstance.head++];
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
