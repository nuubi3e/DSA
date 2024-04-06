class Node: 
  def __init__(self, data):
    self.data = data
    self.next = None


class Stack:
  def __init__(self):
    self.top = None
    self.size = 0

  def is_empty(self):
    return self.size == 0
  
  def push(self, data):
    new_node = Node(data)
    if self.is_empty(): self.top = new_node
    else:
      new_node.next = self.top
      self.top = new_node
    
    self.size += 1

  def pop(self):
    if self.is_empty():
      print("Stack is empty")
    else:
      temp = self.top
      self.top = self.top.next
      self.size -= 1
      return temp.data