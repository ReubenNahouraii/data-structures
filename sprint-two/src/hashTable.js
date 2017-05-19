
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  if(this.checkSize('up')) {
    this.resize('up');
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  if(!obj) {
    obj  = {};
  }

  obj[k] = v;
  this.count++;
  this._storage.set(index, obj);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  if(this.checkSize()) {
    this.resize();
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  this.count--;
  this._storage.set(index, {});
};

HashTable.prototype.checkSize = function(direction) {
  if(direction === 'up') {
    return this.count && this.count * 100 / this._limit >= 75;
  } else {
    return this.count && this.count * 100 / this._limit <= 25;
  }
};

HashTable.prototype.resize = function(direction) {

  let arrOfHashObj = [];
  this._storage.each((obj, index, storage) => {
    if(storage[index] !== undefined) {
      arrOfHashObj.push(obj);
      storage[index] = undefined;
    }
  });

  if(direction === 'up') {
    this._limit *= 2;
  } else {
    this._limit /= 2;
  }

  this.count = 0;
  this._storage = LimitedArray(this._limit);

  arrOfHashObj.forEach(obj => {
    Object.keys(obj).forEach(key => {
      this.insert(key, obj[key]);
    });
  });
};

/*
 * Complexity: What is the time complexity of the above functions? O(1)
 */


