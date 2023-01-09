class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prrepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prrepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  // removeValue IN HEAD NODE

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.next === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  // removeValue IN GIVEN INDEX

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  // search find by value

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  // reverse a LinkedList

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  //   print() {
  //     if (this.isEmpty()) {
  //       console.log("empty");
  //     } else {
  //       let curr = this.head;
  //       let listValues = "";

  //       while (curr) {
  //         listValues += `${curr.value}`;
  //         curr = curr.next;
  //       }
  //       console.log(listValues);
  //     }
  //   }
  print() {
    const array = [];
    let curr = this.head;
    while (curr !== null) {
      array.push(curr.value);
      curr = curr.next;
    }
    return console.log(array);
  }
  average() {
    let count = 0;
    let sum = 0;
    let result;
    for (let i = 0; i < this.size; i++) {
      let prev = this.head;
      while (prev) {
        sum = sum + prev.value;
        count++;
        prev = prev.next;
      }
      let result = sum / count;
      return console.log(result);
    }
  }
  sum() {
    let sum = 0;
    for (let i = 0; i < this.size; i++) {
      let prev = this.head;
      while (prev) {
        sum = sum + prev.value;
        prev = prev.next;
      }
      return console.log(sum);
    }
  }
  odd() {
    let array = [];
    for (let i = 0; i < this.size; i++) {
      let prev = this.head;
      while (prev) {
        if (prev.value % 2 !== 0) {
          array.push(prev.value);
        }
        prev = prev.next;
      }
      return console.log(array);
    }
  }
}

list = new LinkedList()
list.append(1)
list.append(2)

list.append(4)
list2 = new LinkedList()
list2.append(1)
list2.append(3)
list2.append(4)

const arr1 = []
const arr2 = []
while(list.head){
    arr1.push(list.head.value)
    list.head = list.head.next
}

while(list2.head){
    arr2.push(list2.head.value)
    list2.head = list2.head.next
}
console.log(arr1)
console.log(arr2)
const arr = arr1.concat(arr2).sort((a,b)=>a-b)
console.log(arr)
