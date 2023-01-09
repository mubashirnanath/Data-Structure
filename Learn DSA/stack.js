class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
class Stack {
  constructor() {
    (this.top = null), (this.bottom = null), (this.length = 0);
  }
  peek() {
    return console.log(this.top);
  }
  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const now = this.top;
      this.top = node;
      this.top.next = now;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return console.log(null);
    }
    if(this.top===this.bottom){
        this.bottom=null
    }
    // const now = this.top
    this.top = this.top.next;
    this.length--;
    return this;
  }

  print(){
      const array  = []
      let curr = this.top
      while(curr!==null){
          array.push(curr.value)
          curr= curr.next
      }
      return console.log(array);;
  }
 
}

const myStack = new Stack();
// myStack.peek()
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.pop()
myStack.print();





// print() {
    //     if (this.length === 0) {
    //       console.log("empty");
    //     } else {
    //       let curr = this.top;
    //       let listValues = "";
    
    //       while (curr) {
    //         listValues += `${curr.value}`;
    //         curr = curr.next;
    //       }
    //       console.log(listValues);
    //     }
    //   }