export default class Queue {
  constructor() {
    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.list = [];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.len() === 0;
  }

  len() {
    return this.list.length;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list[0];
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    this.list.push(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {*}
   */
  dequeue() {
    const firstItem = this.list[0];
    this.list = this.list.slice(1, this.len());
    return firstItem;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.list.map((node) => (callback ? callback(node) : `${node}`)).toString();
  }
}
