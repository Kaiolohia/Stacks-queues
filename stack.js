/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode
      this.last = newNode
      this.size++
      return undefined
    }
    let firstNode = this.first
    this.first = newNode
    this.first.next = firstNode
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.size) throw new Error("Stack is empty")
    let firstNode = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
      this.size--
      return firstNode.val
    }
    this.size--
    let nextNode = firstNode.next
    this.first = nextNode
    return firstNode.val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.size) return undefined
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size ? false : true
  }
}

module.exports = Stack;
