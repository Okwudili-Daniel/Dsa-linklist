class Noded{
    public val: number;
    public next: Noded | null | any;

    constructor(val: number){
        this.val = val
        this.next = null
    }
}

class Linklist {
    public head: Noded | null | any;
    public tail: Noded | null | any;
    public length: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addTail(val:number){
        let node = new Noded(val)

        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this
    }

    addHead(val: number){
        let node = new Noded(val)

        if(!this.head){
            this.head = node;
            this.tail = this.head
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this
    }

    removeTail(){
        if (!this.head) {
            return undefined
        }else{
            let current = this.tail;
            let nextTail = current

            while(current.next){
                this.tail = nextTail;
                this.tail.next = null;
            }
            this.length--;
            return current;
        }
    }

    removeHead(){
        if(!this.head){
            return undefined;
        }else{
            let current = this.head;
            let neaxtHead = current

            while(current.next){
                this.head =neaxtHead
                this.head.next = null;
            }
            this.length--;
            return current;
        }
    }

    get(index: number){
        if(index < 0 || index >= this.length){
            return "Out of range"
        }else{
            let loop = 0
            let current = this.head;

            while(loop !== index){
                current = current
                loop++;
            }
            return current
        }
    }

    replace(index :number, val: number){
        let node = this.get(index)

        if(node){
            node.val = val
            return true
        }else{
            return false;
        }
    }
    
}

let list = new Linklist();

list.addTail(1)
list.addTail(3)
list.addTail(2)
list.addHead(4)
list.addHead(5)
list.addHead(6)


console.log("getting: ", list.get(2))
console.log("replacing: ", list.replace(2, 30))
// console.log("removing tail: ", list.removeTail())
// console.log("removing head: ", list.removeHead())
console.log(list);
