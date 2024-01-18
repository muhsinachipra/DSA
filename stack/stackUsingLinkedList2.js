class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedData = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedData;
    }

    peek() {
        return this.isEmpty() ? null : this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return;
        }
        let curr = this.top;
        let str = '';
        while (curr) {
            str += curr.data + ' ';
            curr = curr.next
        }
        console.log(str);
    }
}

const stack = new LinkedListStack()
console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.getSize())
stack.print()

console.log(stack.pop())
console.log(stack.peek())
stack.push(40)
stack.print()