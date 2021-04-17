class ll{
    constructor(value){
        this.head = null
        this.tail = null
    }
    append(value){
        const newNode = {value: value, next: null }
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode
        if(!this.head){
            this.head = newNode
        }
        
    }
    prepend(value){
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

}
let x = new ll()
x.append(1)
x.append(2)
x.append(3)
x.prepend(0)
console.log(x.toArray())

// 1 -> 2 -> 3 -> 4