// --------------------- Creating Linked List ---------------------

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  #head
  constructor() {
    this.#head = null
  }

  append(data) {
    const newNode = new Node(data)
    if (!this.#head)
      return this.#head = newNode

    // console.log(this.#head);

    let currentNode = this.#head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = newNode
  }

  display() {
    console.log("LNK LST: ", this.#head);
  }
}

const data = new SinglyLinkedList()

data.append(10)
data.append(20)
data.append(20)
data.append(20)

console.log(data);
// data.display()

const isActive = false

function weirdJS(propertyName, ...values) {
  console.clear()
  let classNames = ""
  let i = 0
  while (i < values.length) {
    classNames += `${propertyName[i]}${values[i]}`
    i++
  }
  classNames += ';'

  console.log(classNames.replaceAll('\n', ""));

}

weirdJS`
background-color: ${isActive ? "red" : "blue"};
color: ${isActive ? "red" : "blue"};
font-weight: ${isActive ? "800" : "500"}
`