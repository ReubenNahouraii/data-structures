var Queue = function() {

  var queue = {
    count : 0,
    head : 0,
    tail : 0,
    storage : {}
  };

  extend(queue, queueMethods);

  return queue;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail++] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if(!this.count) {
    return;
  }

  this.count--;
  return this.storage[this.head++];
};

queueMethods.size = function() {
  return this.count;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



