class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }    
}
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

const postorder = (root) =>{
    if(root !== null){
        inorder(root.left)
        inorder(root.right)
        console.log(root.value)
    }
}
const inorder = (root) =>{
    if(root !== null){
        inorder(root.left)
        console.log(root.value)
        inorder(root.right)
    }
}
const preorder = (root) =>{
    if(root !== null){
        console.log(root.value)
        preorder(root.left)
        preorder(root.right)
    }
}
// postorder(root)
let ptr = root
let arr=[]
while(ptr !== null){
    arr.push()
    ptr = ptr.left
}