class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('invalid index: ' + index)
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    reverseFromIndex(index) {
        if (index < 0 || index > this.size) {
            return console.log('Invalid Index')
        } else {
            let prev = null
            let curr = this.head
            for (let i = 0; i < index; i++) {
                prev = curr
                curr = curr.next
            }
            let reversePrev = null
            let reverseCur = curr
            while (reverseCur) {
                let next = reverseCur.next
                reverseCur.next = reversePrev
                reversePrev = reverseCur
                reverseCur = next
            }
            if (prev === null) {
                this.head = reversePrev
            } else {
                prev.next = reversePrev
            }
        }
    }

    reverseFromMiddle() {
        let fast = this.head
        let slow = this.head
        let prev = null
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        let middle = slow

        let reversePrev = null
        let reverseCur = middle
        while (reverseCur) {
            let next = reverseCur.next
            reverseCur.next = reversePrev
            reversePrev = reverseCur
            reverseCur = next
        }
        prev.next = reversePrev
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is Empty!");
        } else {
            let curr = this.head;
            let listValue = '';
            while (curr) {
                listValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValue);
        }
    }

    // Detect if the linked list contains a cycle Floyd's Cycle Detection Algorithm, also known as the Tortoise and Hare Algorithm
    hasCycle() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }
        return false
    }

    removeOdd() {
        while (this.head.value % 2 !== 0) {
            this.head = this.head.next
        }
        let current = this.head
        while (current.next) {
            if (current.next.value % 2 !== 0) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }

    findNthFromEnd(n) {
        let first = this.head
        let second = this.head

        for (let i = 0; i < n; i++) {
            if (!first) return null
            first = first.next
        }

        while (first) {
            first = first.next
            second = second.next
        }

        return second ? second.value : null
    }

    removeDuplicatesUnsorted() {
        const seen = new Set()
        let current = this.head
        let prev = null
        while (current) {
            if (seen.has(current.value)) {
                prev.next = current.next
            } else {
                seen.add(current.value)
                prev = current
            }
            current = current.next
        }
    }

    isPalindrome() {
        if (!this.head || !this.head.next) return true;

        // Step 1: Find the middle of the list
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half of the list
        let prev = null;
        let current = slow;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Step 3: Compare the first and second halves
        let firstHalf = this.head;
        let secondHalf = prev; // This is the reversed second half
        let isPalindrome = true;

        while (secondHalf) {
            if (firstHalf.value !== secondHalf.value) {
                isPalindrome = false;
                break;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        // Step 4: Restore the second half of the list
        current = prev;
        prev = null;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return isPalindrome;
    }


}

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(2);
// list.append(1);

// console.log("Original List:");
// list.print();

// if (list.isPalindrome()) {
//     console.log("The linked list is a palindrome.");
// } else {
//     console.log("The linked list is not a palindrome.");
// }




// const unsortedList = new LinkedList();
// unsortedList.append(4);
// unsortedList.append(2);
// unsortedList.append(4);
// unsortedList.append(3);
// unsortedList.append(2);

// console.log("Original Unsorted List:");
// unsortedList.print();

// unsortedList.removeDuplicatesUnsorted();

// console.log("Unsorted List After Removing Duplicates:");
// unsortedList.print();



const list = new LinkedList()

list.insert(1, 0)
list.insert(2, 1)
list.insert(3, 2)
list.insert(4, 3)
list.insert(5, 4)
list.insert(6, 5)
list.print()

console.log(list.findNthFromEnd(2))

list.removeOdd()
list.print()

// list.reverse()
list.reverseFromMiddle()
list.print()