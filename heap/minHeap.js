class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        const min = this.heap[0];
        const last = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;
        while (true) {
            let smallestChildIndex = index;
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }
            if (index !== smallestChildIndex) {
                [this.heap[index], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[index]]
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    display() {
        console.log(this.heap);
    }

    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    peek() {
        return this.heap[0]
    }

    search(value) {
        return this.heap.includes(value)
    }
}

const heap = new MinHeap();
// heap.insert(1)
// heap.insert(2)
// heap.insert(3)
// heap.insert(4)
// heap.insert(6)
// heap.insert(9)
// heap.insert(5)
// heap.insert(7)
// heap.insert(8)

// Example usage with buildHeap:
const arrayToInsert = [4, 2, 7, 1];
heap.buildHeap(arrayToInsert);

heap.display();

console.log(heap.extractMin()); // Output: 1
console.log(heap.extractMin()); // Output: 2

console.log('-----------------------------------------');
heap.display();
console.log(heap.peek());
console.log('-----------------------------------------');
console.log(heap.search(7))



