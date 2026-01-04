class Deque {
    constructor() {
        this.items = [];
    }

    pushFront(value) {
        this.items.unshift(value)
    }

    pushRear(value) {
        this.items.push(value)
    }

    popFront() {
        if (this.isEmpty()) return null;
        return this.items.shift()
    }

    popRear() {
        if (this.isEmpty()) return null;
        return this.items.pop()
    }

    peekFront() {
        return this.isEmpty() ? null : this.items[0]
    }

    peekRear() {
        return this.isEmpty() ? null : this.items.at(-1)
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}

// Example usage:
const deque = new Deque();
deque.pushFront(10);
deque.pushRear(20);
deque.pushFront(5);
console.log(deque.popRear()); // 20
console.log(deque.popFront()); // 5
console.log(deque.size()); // 1
