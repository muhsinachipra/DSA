class QueueUsingStacks {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value) {
        this.stack1.push(value)
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop())
            }
        }

        if (this.stack2.length === 0) {
            throw new Error('Queue is Empty')
        }

        return this.stack2.pop()
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop())
            }
        }

        if (this.stack2.length === 0) {
            return new Error('Queue is Empty')
        }

        return this.stack2.at(-1)
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}

// Example usage:
const queue = new QueueUsingStacks();

// Enqueue elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Dequeue elements
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.dequeue()); // Output: 2

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: false

// Dequeue the last element
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true