class ll{
    constructor(value){
        this.head = null
        this.tail = null
    }
    push_back(value){
        const newNode = {value: value, next: null }
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode
        if(!this.head){
            this.head = newNode
        }
        
    }
    push_front(value){
        const newNode = {value: value, next: this.head }
        this.head = newNode
        if(!this.tail){
            this.tail = newNode
        }
    }

    toArray(){
        let arr=[]
        let ptr = this.head
        while(ptr !== null){
            arr.push(ptr.value)
            ptr = ptr.next
        }
        return arr;
    }
    size(){
        return this.toArray().length
    }
    isEmpty(){
        return !this.toArray().length
    }
    valueAt(i){
        let ptr = this.head
        let count =0
        while(ptr!==null && count<i){
            count++
            ptr = ptr.next
        }
        return ptr?.value
    }
    delete(value){
        if(!this.head)// if no element in LL
            return;
        
        let ptr = this.head, prev = null;
        while(ptr !== null){
            if(this.head.value === value){
                this.head = ptr
            }else if(ptr.value === value){
                if(!prev){
                    this.head.next = ptr.next
                    prev = this.headhead
                }else{
                    prev.next = ptr.next
                    if(ptr.next !== null)
                        prev = ptr.next
                }
                
            }
            
            ptr = ptr.next

        }
        return -1
    }
    insertAfter(node, value){
        let ptr = this.head
        const newNode = {value: value, next: null }
        while(ptr !== null){
            if(ptr.value === node){
                newNode.next = ptr.next
                ptr.next = newNode
                if(newNode.next === null)
                    this.tail = newNode
                break;
            }
            ptr = ptr.next
        }
    }
    insertBefore(node, value){
        let ptr = this.head,prev;
        const newNode = {value: value, next: null }
        while(ptr!==null){
            if(ptr.value === node){
                if(!prev){//head
                    newNode.next = ptr
                    this.head = newNode
                }else{
                    newNode.next = prev.next
                    prev.next = newNode
                }
                break;
            }
            prev = ptr
            ptr = ptr.next
        }
    }
    pop_front(){
        let ptr = this.head
        this.head = this.head.next
        return ptr.value
    }
    pop_back(){
        let ptr = this.head;
        let tmp = this.tail
        while(ptr !== null){
            if(ptr.next === this.tail){
                ptr.next = null
                this.tail = ptr
            }
            ptr = ptr.next
        }
        return tmp.value
    }
    front(){
        return this.head.value
    }
    back(){
        return this.tail.value
    }
    reverse(){
       let prev = this.head
       let ptr1 = this.head.next
       let ptr2 = this.head.next.next
       this.head.next=null
       this.tail=this.head
        if(ptr2 === null){
            this.head = ptr1
            this.tail = prev
            ptr1.next = prev
        }else{
            while(ptr2 !== null){
                ptr1.next = prev
                prev = ptr1
                ptr1 = ptr2
                this.head = ptr2
                ptr2 = ptr1.next     
            }
            this.head.next = prev
        }
       return this
    }
}
let x = new ll()
x.push_back(3)
x.push_back(3)

x.push_back(1)

x.push_back(3)
x.push_back(3)
x.push_back(2)
x.push_front(0)
x.delete(3)
x.push_back(2)
x.push_back(5)
x.push_back(3)

x.insertAfter(2,6)
x.insertBefore(2,5)
console.log(x.pop_front())
console.log(x.valueAt(4))
console.log(x.pop_back())
console.log(x.toArray())
console.log(x.reverse().toArray())

// 1 -> 2 -> 3 -> 4