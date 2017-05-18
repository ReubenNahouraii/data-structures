var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = Object.create(queueMethods);
  queue.count = 0;
  queue.head = 0;
  queue.tail = 0;
  queue.storage = {};

  return queue;
};

let queueMethods = {};

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
