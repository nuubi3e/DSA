/**
 * -------------------- Stack ---------------------
 * Stack is a data structure which follows LIFO principle (Last In First Out) means elements comes at last will get removed first.
 */

// Node class
console.clear()
class Node {
  data
  pointer = null
  constructor(data) {
    this.data = data
  }
}

// Creating a Stack using Linked List DS approach
class LLStack {
  #top = null
  #size = 0
  constructor() { }

  // method to add element in a stack
  push(data) {
    const newNode = new Node(data)

    // if data is first
    if (!this.#top) this.#top = newNode
    else {
      newNode.pointer = this.#top
      this.#top = newNode
    }

    // increasing the size of stack
    this.#size++
  }

  // method to remove element from stack which will always be from Top
  pop() {
    if (this.isEmpty()) return console.log("Stack is Empty");

    this.#top = this.#top.pointer

    this.#size--;
  }

  // show all elements in stack
  display() {
    let curNode = this.#top
    while (curNode) {
      console.log(curNode.data);
      curNode = curNode.pointer
    }
  }

  // method to tell if the stack is empty or not
  isEmpty() {
    return !this.#top // If there is no value in  #top that means stack is empty
  }

  // method to return last / top element in stack
  top() {
    if (this.isEmpty()) return console.log("Stack is Empty");
    return this.#top.data
  }

  // method to get size of stack
  size() {
    return this.#size
  }

}

// Class to create a stack using Array with fixed memory allocation
class ARStack {
  #max = 0
  #data = []
  #size = 0

  constructor(maxLength) {
    this.#max = maxLength
    this.#data = new Array(maxLength)
  }

  push(data) {
    if (this.#size >= this.#max) return console.log("Stack has exceed its memory");

    this.#data[this.#size] = data

    this.#size++
  }

  // method to display stack data
  display() {
    for (let i = this.#size - 1; i > -1; i--) {
      console.log(this.#data[i]);
    }
  }

  // method to remove top element from stack
  pop() {
    if (this.isEmpty()) return console.log("Stack is Empty");

    this.#data[this.#size - 1] = null

    this.#size--;
  }

  // Method to return top element in stack
  top() {
    if (this.isEmpty()) return console.log("Stack is Empty");

    return this.#data[this.#size - 1]
  }

  // method to check stack is empty or not
  isEmpty() {
    return this.#size === 0
  }

  // method to get size
  size() {
    return this.#size
  }
}