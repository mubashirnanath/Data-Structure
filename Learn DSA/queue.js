class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length=0
    }
    peek(){
        return console.log(this.first.value);
    }
    enqueue(value){
        const node = new Node(value)
        if(this.length===0){
            this.first = node
            this.last = node
        }else{

            this.last.next = node
            this.last = node
        }
        this.length++
        return this
    }
    dequeue(){
        if(!this.first){
            return null
        }
        if(this.first===this.last){
            this.last=null
        }
        this.first = this.first.next
        this.length--
        return this
    }
    print(){
        const arr = []
        let curr = this.first
        while(curr!==null){
            arr.push(curr.value)
            curr = curr.next
        }
        return console.log(arr);
    }
}

const myQueue = new Queue()

myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(40)
myQueue.peek()
myQueue.dequeue()
myQueue.print()