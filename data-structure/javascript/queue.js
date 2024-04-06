/**
 * -------------------- Queue ---------------------
 * Queue is linear Data Struture which follows FIFO(First in First Out) Approach 
 */

console.clear()
class Node {
  data
  pointer = null
  constructor(data) {
    this.data = data
  }
}

//  in Queue we use two pointers 1. front to keep track of first element and 2. rear to keep track of new elements 
class Queue {
  #front = null // front pointer for first element in queue
  #rear = null // rear pointer for last elements in queue
  #size = 0
  constructor() { }

  // method to check whether stack is empty
  isEmpty() {
    return this.#size === 0 || !this.#front
  }

  // method to insert data in queue
  enQueue(data) {
    const newNode = new Node(data)

    // if there is no data in queue
    if (this.isEmpty()) this.#front = this.#rear = newNode
    // if queue is not empty then we add the data at the end of the queue
    else {
      this.#rear.pointer = newNode
      this.#rear = newNode
    }

    this.#size++;
  }

  // method to return first 
  peek() {
    return this.#front.data
  }

  // method to remove element from queue
  deQueue() {
    if (this.isEmpty()) return console.log("Queue is Empty");

    const temp = this.#front

    this.#front = this.#front.pointer

    if (this.#front == null) this.#rear = null

    this.#size--
    return temp.data
  }

  // method to return the first element of queue
  peek() {
    return this.#front.data
  }

  // method to return the size of queue
  length() {
    return this.#size
  }
}

const queue = new Queue()


queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
queue.deQueue()
queue.deQueue()
queue.deQueue()
queue.deQueue()
