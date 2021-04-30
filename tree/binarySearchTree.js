class BST{
    constructor(){
        this.root = null
    }
    addNode(value){
        let newNode = {value: value, left: null, right: null}
        let tmp = this.root
        if(!this.root)
            this.root = newNode
        else{
            while((tmp.value > value && tmp.left) || (tmp.value < value && tmp.right)){
                if(tmp.value > value)
                    tmp = tmp.left
                else //for equeal too
                    tmp = tmp.right
            }
            if(tmp.value > value)
                tmp.left = newNode
            else //for equeal too
                tmp.right = newNode
        }
    }
    find(value){
        let ptr = this.root
        while((ptr.left || ptr.right) && ptr.value !== value){
            if(ptr.value > value){
                ptr = ptr.left
                if(ptr < value)
                    break
            }else{
                ptr = ptr.right
                if(ptr > value)
                    break
            }
        }
        if(ptr.value === value)
            return ptr
        else
            return -1

    }
    isLeaf(ptr){
        if(!ptr.left && !ptr.right)
            return true
        else
            return false
    }
    findSuccessor(ptr){
        if(this.isLeaf(ptr))
            return -1
        if(!ptr.right)
            return ptr
        ptr = ptr.right
        while(ptr.left?.left)
            ptr = ptr.left
        return ptr
    }
    deleteNode(value){
        let ptr = this.find(value)
        let s = this.findSuccessor(ptr)
        if(s !== -1){
            if(s.left?.left === null){ //case 1
                ptr.value = s.left.value
                s.left=null
            }else if(ptr === s){//if ptr has only left node 
//it does not works
                ptr.value = s.left.value
                ptr.left = s.left.left
                ptr.right = s.left.right
            }else if(s.left === null){
                if(s.right === null){//case 2
                    ptr.right = s
                    s = null
                }else{
                    console.log(1)
                    ptr.right = s.right
                    s.right = null
                }
            }
        }else{
            this.ptr = ptr
            this.ptr.value=9999
            delete this.ptr
            console.log(ptr)
        }
    }
}
let a  = new BST()
a.addNode(1)
a.addNode(5)
a.addNode(3)
a.addNode(10)
a.addNode(7)
a.addNode(15)
a.addNode(11)
a.deleteNode(11)
console.log(a)