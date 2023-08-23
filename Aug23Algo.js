/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    //setting up push...
    this.items.push(item);
    //return length?
    return this.size();
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    //use shift
    return this.items.shift();
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    //pulling index[0]
    return this.items[0];
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    // if length is 0
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    //length
    return this.items.length;
  }
}

let emptyQueue = new Queue();
let testQueue = new Queue();
testQueue.enqueue(10)
testQueue.enqueue(20)
testQueue.enqueue(30)
testQueue.enqueue(40)
testQueue.enqueue(50)
testQueue.enqueue(60)
console.log(`emptyQueue is empty: ${emptyQueue.isEmpty()}`);
console.log(`testQueue is empty: ${testQueue.isEmpty()}`);
console.log(`testQueue front: ${testQueue.front()}`);
console.log(`testQueue size: ${testQueue.size()}`);
console.log(`-- printed Que: [${testQueue.items}]`);
console.log(`testQueue dequeue: ${testQueue.dequeue()}`);
console.log(`testQueue size: ${testQueue.size()}`);
console.log(`-- final printed Que: [${testQueue.items}]`);




/* Bonus: Rebuild the above class using a linked list instead of an array. */
console.log("==================(Using Linked List Examples)===================");

class QueNode {

  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedQueList {

constructor(){
  // head
  this.head = null;
  // tail
  this.tail = null;
  // size
  this.size = 0;
}

//================
QueEnqueue(){

}

//================
QueDequeue() {

}

//================
queFront() {

}

//================
queIsEmpty() {

}

//================
queSize() {

}





}
















