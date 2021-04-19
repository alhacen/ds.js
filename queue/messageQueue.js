class Message{
    queue = new Map()
    isQueue(username){
        return this.queue.get(username)?.length?this.queue.get(username)?.length:0;
    }
    pushMessage(username,msg){
        if(!this.isQueue(username)){
            this.queue.set(username,[]);
        }
        this.queue.get(username).push(msg);
    }
    readMessage(username){
        return this.queue.get(username).length?this.queue.get(username).shift():null;
    }
    clearQueue(username){
        this.queue.set(username,[]);
    }
}
let q = new Message()
q.pushMessage("user1","welcome")
q.pushMessage("user2","home")

q.pushMessage("nasa", "NASA Planetary Mission")
q.pushMessage("nasa", "NASA Proceeds to Mars")
q.pushMessage("nasa", "NASA: Pluto Matters!")
q.pushMessage("nasa", "NASA's Punk Music")

console.log(q.readMessage("user1"))//read a message
console.log(q.readMessage("user2"))//read a message


while(q.isQueue("nasa")) //itterate on messages
    console.log(q.readMessage("nasa"))
