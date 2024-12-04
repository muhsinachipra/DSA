class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node at the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Print the list
    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// Merge two sorted linked lists
function mergeSortedLists(list1, list2) {
    let dummy = new Node(0); // Temporary dummy node to simplify the merging process
    let tail = dummy;

    let l1 = list1.head;
    let l2 = list2.head;

    while (l1 && l2) {
        if (l1.value <= l2.value) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next; // Move the tail forward
    }

    // Append any remaining nodes from either list
    tail.next = l1 || l2;
    const mergedList = new LinkedList();
    mergedList.head = dummy.next;
    return mergedList;
}

// Usage
const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

console.log("List 1:");
list1.printList();

console.log("List 2:");
list2.printList();

const mergedList = mergeSortedLists(list1, list2);
console.log("Merged Sorted List:");
mergedList.printList();
