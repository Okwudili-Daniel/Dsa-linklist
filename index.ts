class Nodes{
    public val: number;
    public next: Nodes | null | any;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

class LinkList {
    public head: Nodes | null | any;
    public tail: Nodes | null | any;
    public lenght: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    // push
    addTail(val: number){
        let node = new Nodes(val)

        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.lenght++
        return this;        
    }

    addHead(val: number){
        let node = new Nodes(val)

        if(!this.head){
            this.head = node;
            this.tail = null;
        }else{
            this.head = node;
            node.next= this.head;
        }

        this.lenght++;
        return this; 
    }

    // pop
    removeTail(){
        if(!this.head){
            return undefined
        }else{
            let current = this.tail;
            let nextTail = current;

            while(current.next){
                this.tail = nextTail;
                this.tail.next = null;
            }
            this.lenght--;
            return current;
        }
    }

    // shift

    removeHead(){
        if(!this.head){
            return undefined
        }else{
            let current = this.head;
            let newHead = current;
            
            while(current.next){
                this.head = newHead;
                this.head.next = null;
            }
            this.lenght--;
            return current;
        }
    }

    get(index: number){
        if (index < 0 || index >= this.lenght) {
            return "Out of range.";
        }else{
            let loop: number= 0;
            let current = this.head;

            while(loop !== index){
                current = current;
                loop++;
            }

            return current;
        }
    }

    replace(index: number, val: number){
        let node= this.get(index);

        if(node){
            node.val= val;
            return true;
        }else{
            return false;
        }
    }

    insert(index: number, val:number){
        let node = new Nodes(val);

        if(index < 0 || index >= this.lenght) return "Out of Range";
        if(index === 0) return !!this.addHead(val);
        if(index === this.lenght) return !!this.addTail(val);

        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = node;
        node.next = temp;

        this.lenght++;
        return true;
    }

    remove(index: number){
        if(index < 0 || index >= this.lenght) return "Out of Range";
        if(index === 0) return !!this.removeHead();
        if(index === this.lenght) return !!this.removeTail();

        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = temp.next;

        this.lenght--;
        return temp;
    }
}

let linkList = new LinkList();

linkList.addTail(3);
linkList.addTail(31);
linkList.addTail(4);
linkList.addTail(9);
linkList.addHead(90);


console.clear();
// console.log(linkList.removeTail())
// console.log(linkList.removeHead())
// console.log(linkList.lenght);
console.log("getting next", linkList.get(3));
// console.log("getting next", linkList.replace(3, 25));

// console.log(linkList.remove(1));

console.log(linkList);
