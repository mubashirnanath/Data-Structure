class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    createTree() {
        let root = new TreeNode(10);
      
        root.left = new TreeNode(20);
        root.right = new TreeNode(30);
      
        root.left.left = new TreeNode(40);
        root.left.right = new TreeNode(50);
      
        root.right.left = new TreeNode(60);
        root.right.right = new TreeNode(70);
      
        root.left.left.right = new TreeNode(80);
      
        return console.log(root);;
      }
}
  
 
const a = new TreeNode()
a.createTree()
