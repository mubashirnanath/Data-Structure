// console.log('hai');

class Node {
  constructor(value) {
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
  print(){
      const array  = []
      let curr = this.head
      while(curr!==null){
          array.push(curr.value)
          curr= curr.next
      }
      return console.log(array);;
  }
  average() {
    let count=0;
    let sum =0;
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
  sum(){
    let sum = 0
    for(let i = 0;i<this.size;i++){
       let prev=this.head
        while(prev){
            sum = sum + prev.value
            prev= prev.next
        }
        return console.log(sum);
    }
  }
  odd(){
    let array=[]
    for(let i=0;i<this.size;i++){
        let prev = this.head
        while(prev){
            if(prev.value % 2 !==0){
                array.push(prev.value)
            }
            prev= prev.next
        }
        return console.log(array)
    }
  }
}

const list = new LinkedList();

list.insert(10, 0);
list.insert(11, 1);
list.insert(24, 0);
list.insert(45, 3);
list.append(50);
list.append(80);
list.append(70);
list.append(80);
list.append(780);
list.print();
list.average()
list.sum()
list.odd()
// console.log(list.removeValue(80));
// console.log(list.search(70));
// list.reverse()
// list.print()
// console.log(list.removeFrom(1));
// list.print()

// removeFrom(index){
//     if(index<0 || index >this.size){
//         return
//     }
//     let removenode
//     if(index===0){
//         removenode = this.head
//         this.head = this.head.next
//     }else{
//         let prev  = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         removenode = prev.next
//         prev.next = removenode.next
//     }
//     this.size--
// }

// removevalue(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.head.value===value){
//         this.head.next = this.head
//         this.size--
//     }
// }

// insert(value,index){
//     if(index<0 || index>this.size){
//         return
//     }
//     if(index===0){
//         this.prepend(value)
//     }else{
//         const node = new node(value)
//         let prev= this.head
//         for(let i = 0; i<index-1;i++){
//             prev = prev.next
//         }
//         node.next = prev.next
//         prev.next = node
//         this.size++
//     }
// }

// removeF(index){
//     if(index<0 || index>this.size){
//         return
//     }
//     let removeNode
//     if(index===0){
//         removeNode= this.head
//         this.head= this.head.next
//     }else{
//         let prev = this.head
//         for(let i = 0;i<index-1;i++){
//             prev = prev.next
//         }
//         removeNode = prev.next
//         prev.next = removeNode.next
//     }
//     this.size--
// }

// removeF(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.head.value===value){
//         this.head = this.head.next
//         this.size--
//     }
// }

// search(value){
//     if(this.isEmpty()){
//         return -1
//     }
//     let i =0
//     let curr = this.head
//     while(curr){
//         if(curr.value===value){
//             return i
//         }
//         curr = curr.next
//         i++
//     }
//     return-1
//

// reverse(){
//     let prev = null
//     let curr = this.head
//     while(curr){
//         const next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
//     this.head=prev
// }

// reverse(){
//     let prev = null
//     let curr = this.head
//     while(curr){
//         const next = curr.next
//         curr.next = prev
//         prev = curr
//         curr=next
//     }
//     this.head = prev
// }

