class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(value) {
        this.items[this.count] = value;
        this.count++;
        console.log(`${value} is added to stack`);
    }

    pop() {
        const deletedElement = this.items[this.count - 1]
        this.items[this.count - 1] = null;
        this.count--;
        console.log(`${deletedElement} is removed from stack`);
        return deletedElement
    }

    isEmpty() {
        return this.count === 0;
    }

    getSize() {
        return this.count
    }

    peek() {
        return this.items[this.count - 1];
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        }
        let str = '';
        for (let i = 0; i < this.count; i++) {
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
stack.push(60)
stack.push(70)
stack.push(80)
console.log(stack.getSize())
stack.print()

stack.pop()
console.log(stack.peek())
stack.push(40)
stack.print()
stack.pop()
stack.print()