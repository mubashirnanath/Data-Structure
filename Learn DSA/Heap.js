// class Heap {
    // constructor(array) {
    //     if (array) {
    //         this.heap = array
    //     } else {
    //         this.heap = []
    //     }
    //     this.buildHeap()
    // }
//     buildHeap() {
//         for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(currentIndex) {
//         const endIndex = this.heap.length - 1;
//         let leftIndex = this.leftChild(currentIndex)
//         while (leftIndex<=endIndex ){
//             const rightIndex = this.rightChild(currentIndex)
//             let indexToShift;
//             if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex]){
//                 indexToShift=rightIndex;
//             }else{
//                 indexToShift=leftIndex;
//             }
//             if(this.heap[indexToShift]<this.heap[currentIndex]){
//                 this.swap(indexToShift,currentIndex);
//                 currentIndex = indexToShift;
//                 leftIndex = this.leftChild(currentIndex)
//             }else{
//                 return
//             }
//         }
//     }
//     shiftUp(currentIndex){
//         let parentIndex =  this.parent(currentIndex)
//         while (currentIndex>0 && this.heap[parentIndex] > this.heap[currentIndex]){
//             this.swap(currentIndex,parentIndex)
//             currentIndex =  parentIndex;
//             parentIndex = this.parent(currentIndex)
//         }
//     }
//     peak() {
//         if(this.heap.length > 0) {
//             console.log(this.heap[0])
//         }else{
//             console.log("Heap is empty")
//         }
//     }
//     remove() {
//         this.swap(0,this.heap.length-1)
//         this.heap.length = this.heap.length - 1
//         this.shiftDown(0)
//     }
//     insert(num) {
//         this.heap[this.heap.length] = num
//         this.shiftUp(this.heap.length-1)
//     }
//     parent(i) {
//         return parseInt((i - 1) / 2)
//     }
//     leftChild(i) {
//         return i * 2 + 1
//     }
//     rightChild(i) {
//         return i * 2 + 2
//     }
//     display() {
//         for (var i = 0; i < this.heap.length; i++) {
//             console.log(this.heap[i])
//         }
//     }
//     swap(indexOne, indexTwo) {
//         const temp=this.heap[indexOne]
//         this.heap[indexOne] = this.heap[indexTwo]
//         this.heap[indexTwo] = temp
//     }
// }
// const array = [7,3,6,3,4]
// const heap = new Heap(array);

// // heap.insert(1)
// // heap.insert(5)
// heap.insert(1)
// heap.display()
// // heap.peak()
// // heap.remove()
// // heap.display()
// // heap.shiftDown()

// class Heap{
//     constructor(array) {
//         if(array){
//             this.heap = array
//         }else{
//             this.heap = []
//         }
//         this.buildHeap()
//     }
//     buildHeap(){
//         for(let i = this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(currentIndex){
//         let endIndex = this.heap.length-1
//         let leftIndex = this.leftChild(currentIndex)
//         while(leftIndex<=endIndex){
//             let rightIndex = this.rightChild(currentIndex)
//             let indexToShift;
//             if(rightIndex<=endIndex && this.heap[rightIndex]>this.heap[leftIndex]){
//                 indexToShift = rightIndex
//             }else{
//                 indexToShift = leftIndex
//             }
//             if(this.heap[indexToShift]>this.heap[currentIndex]){
//                 this.swap(indexToShift,currentIndex)
//                 currentIndex = indexToShift
//                 leftIndex = this.leftChild(currentIndex)
//             }else{
//                 return
//             }
//         }
//     }
//     shiftUp(currentIndex){
//         let parentIndex = this.parent(currentIndex)
//         while(currentIndex>=0 && this.heap[parentIndex]>this.heap[currentIndex]){
//             this.swap(currentIndex,parentIndex)
//             currentIndex = parentIndex
//             parentIndex = this.parent(currentIndex)
//         }
//     }
//     insert(num){
//         this.heap[this.heap.length] = num
//         this.shiftUp(this.heap.length-1)
//     }
//     remove(){
//         this.swap(0,this.heap.length-1)
//         this.heap.length = this.heap.length-1
//         this.shiftDown(0)
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
//     parent(i){
//         return parseInt((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return 2*i+2
//     }
//     swap(indexOne,indexTwo){
//         let temp = this.heap[indexOne]
//         this.heap[indexOne] = this.heap[indexTwo]
//         this.heap[indexTwo] = temp
//     }
//     secondLargest(){
//         let left = 1
//         let right = 2
//         if(this.heap[1]>this.heap[2]){
//             console.log(this.heap[1]);
//         }else{
//             console.log(this.heap[2]);
//         }
//     }
// }

// const heap = new Heap([1,3,5,34,6,87])
// // heap.remove()
// heap.secondLargest()
// heap.display()




// class Heap {
//   constructor(array) {
//     if (array) {
//       this.heap = array;
//     }else{
//         this.heap= []
//     }
//     this.buildHeap()
//   }
//   buildHeap(){
//     for(let i=this.parent(this.heap.length-1);i>=0;i--){
//         this.shiftDown(i)
//     }
//   }
//   shiftDown(currentIndex){
//     let endIndex = this.heap.length-1
//     let leftIndex = this.leftChild(currentIndex)
//     while(leftIndex<=endIndex){
//         let rightIndex = this.rightChild(currentIndex)
//         let IndexToShift;
//         if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex]){
//             IndexToShift = rightIndex
//         }else{
//             IndexToShift = leftIndex
//         }
//         if(this.heap[IndexToShift]<this.heap[currentIndex]){
//             this.swap(IndexToShift,currentIndex)
//             currentIndex = IndexToShift
//             leftIndex = this.leftChild(currentIndex)
//         }else{
//             return
//         }
//     }
//   }
//   parent(i){
//     return parseInt((i-1)/2)
//   }
//   leftChild(i){
//     return 2*i+1
//   }
//   rightChild(i){
//     return 2*i+2
//   }
//   display(){
//     for(let i=0;i<this.heap.length;i++){
//         console.log(this.heap[i]);
//     }
//   }
//   swap(indexOne,indexTwo){
//     let temp = this.heap[indexOne]
//     this.heap[indexOne] = this.heap[indexTwo]
//     this.heap[indexTwo] = temp
//   }
//   insert(num){
//     this.heap[this.heap.length] = num
//     this.shiftUp(this.heap.length-1)
//   }
//   shiftUp(currentIndex){
//     let parentIndex = this.parent(currentIndex)
//     while(currentIndex>=0 && this.heap[parentIndex]>this.heap[currentIndex]){
//         this.swap(currentIndex,parentIndex)
//         currentIndex = parentIndex
//         parentIndex = this.parent(currentIndex)
//     }
//   }
// }

// const array = [98,4,5,6,7,34,0]
// const heap = new Heap(array)
// heap.insert(2)
// heap.display()

// class MaxHeap{
//   constructor(arr){
//     this.value
//   }
// }

class Heap {
  constructor(arr){
    if(arr){
      this.heap = arr
    }else{
      this.heap = []
    }
    this.buildHeap()
  }
  buildHeap(){
      for(let i = this.parent(this.heap.length-1);i>=0;i--){
        console.log(i)
          this.shiftDown(i)
      }
  }
  shiftDown(currentIndex){
      const endIndex = this.heap.length - 1
      let leftIndex = this.leftChild(currentIndex)
      while(leftIndex<=endIndex){
          const rightIndex = this.rightChild(currentIndex)
          let indexToShift;
          if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex]){
              indexToShift = rightIndex
          }else{
              indexToShift = leftIndex
          }
          if(this.heap[indexToShift]>this.heap[currentIndex]){
              this.swap(indexToShift,currentIndex)
              currentIndex = indexToShift
              leftIndex = this.leftChild(currentIndex)
          }else{
              return
          }
      }
  }
  parent(value){
      return Math.floor((value-1)/2)
  }
  leftChild(value){
      return 2*value +1
  }
  rightChild(i){
      return 2*i +2
  }
  swap(firstIndex,secondIndex){
    let temp = this.heap[firstIndex]
    this.heap[firstIndex] = this.heap[secondIndex]
    this.heap[secondIndex] = temp
  }
}

const arr = [1,2,5,3,6,8,7,9]
const heaps = new Heap([1,3,5,4,6,8,67])
console.log(heaps)