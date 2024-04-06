// A Cell Class which will be a generic class means we can define the type of data we need to store in this node to maintain the continuty
// I used Cell instead of Node because Node is reserved in TS.
class NODE<N> {
  _data: N
  pointer: null | NODE<N>
  constructor(data: N) {
    this._data = data
    this.pointer = null
  }
}

// Stack DS using linked list
export class Stack<S> {
  #top: null | NODE<S>
  #size: number = 0
  constructor() {}

  // method to add new element in stack
  push(data: S) {
    const newNode = new NODE(data)
    if (this.isEmpty()) {
      this.#top = newNode
    } else {
      newNode.pointer = this.#top
      this.#top = newNode
    }

    this.#size++
  }

  // method will return a boolean value to check where stack is empty or not
  isEmpty(): boolean {
    return this.#size === 0
  }
}
