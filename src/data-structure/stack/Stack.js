export default class Stack {
  constructor() {
    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.list = [];
  }

  len() {
    return this.list.length;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    // The stack is empty if its linked list doesn't have a head.
    return this.len() === 0;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      // If the linked list is empty then there is nothing to peek from.
      return null;
    }

    // Just read the value from the start of linked list without deleting it.
    return this.list[0];
  }

  /**
   * @param {*} value
   */
  push(value) {
    // Pushing means to lay the value on top of the stack. Therefore let's just add
    // the new value at the start of the linked list.
    this.list.push(value);
  }

  /**
   * @return {*}
   */
  pop() {
    if (this.isEmpty()) return null;
    // Let's try to delete the first node (the head) from the linked list.
    // If there is no head (the linked list is empty) just return null.
    const lastItem = this.list[this.len() - 1];
    this.list = this.list.slice(0, this.len() - 1);
    return lastItem;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    const revertList = [];
    let index = this.len() - 1;
    while (index >= 0) {
      revertList.push(this.list[index]);
      index -= 1;
    }
    return revertList.map((node) => (callback ? callback(node) : `${node}`)).toString();
  }
}
