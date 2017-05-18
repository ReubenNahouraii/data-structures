var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    let node = new Node(value);

    if (!list.tail) {
      list.head = list.tail = node;
      return;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function () {
    let tempNode = list.head;
    list.head = tempNode.next;

    return tempNode.value;
  };

  list.contains = function (target) {
    let node = list.head;
    for (; node; node = node.next) {
      if (node.value === target) {
        return true;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? n
 */
