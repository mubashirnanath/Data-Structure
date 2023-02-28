// class Node{
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BST{
//     constructor() {
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,value)
//         }
//     }
//     insertNode(root,newNode){
//         console.log(this.root);
//         if(root.value>newNode){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right ===null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             this.max(root.right)
//         }
//     }
// }

// const bst = new BST()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,98));
// console.log(bst.search(bst.root,21));

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)

// bst.levelOrder()
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// console.log(bst.root);

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value < newNode) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insert(root.left, newNode);
      }
    } else {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insert(root.left, newNode);
      }
    }
  }
  search(root,value){
    if(!root){
      return false
    }else{
      if(root.value===value){
        return true
      }else if(root.value<value){
        this.search(root.left,value)
      }else if(root.right>value){
        this.search(root.right,value)
      }
    }
  
  }
  preOrder() {
    console.log(this.root.value);
    this.preOrder(this.root.left);
    this.preOrder(this.root.right);
  }
  inOder(root) {
    this.inOder(root.left);
    console.log(root.value);
    this.inOder(this.root.right);
  }
  postOder(root) {
    this.postOder(root.left);
    this.postOder(root.right);
    console.log(root.value);
  }
  
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.right;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  isValidBST(root, min = null, max = null) {
    if (!root) {
      return true;
    }

    if (max != null && root.value > max) {
      return false;
    }
    if (min != null && root.value < min) {
      return false;
    }

    let leftSide = this.isValidBST(root, min, root.value);
    let rightSide = this.isValidBST(root, root.value, max);
    return leftSide && rightSide;
  }

  findClosestValue(root, target) {
    let curr = root;
    let closest = root.value;
    while (curr != null) {
      if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
        closest = curr.value;
      }
      if (target < curr.value) {
        curr = curr.left;
      } else if (target > curr.value) {
        curr = curr.right;
      } else {
        break;
      }
    }
    return closest;
  }
}
 const bst = new BinarySearchTree()

 bst.insert(10)
 bst.insert(5)
 bst.insert(81)
 console.log(bst.root);