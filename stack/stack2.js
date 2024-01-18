class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
        console.log(`${value} added to stack`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty, cannot pop");
            return null
        }
        console.log(`${(this.items.pop())} removed from stack`);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty, cannot peek");
            return null; // or throw an error if you prefer
        }
        return this.items[this.items.length - 1];
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' ';
        }
        console.log(str);
    }

}


const stack = new Stack()
console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.getSize())
stack.print()

stack.pop()
console.log(stack.peek())
stack.push(40)
stack.print()