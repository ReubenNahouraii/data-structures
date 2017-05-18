var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.head = 0;
  this.tail = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if(!this.count) {
    return;
  }

  this.count--;
  return this.storage[this.head++];
};

Queue.prototype.size = function() {
  return this.count;
};

