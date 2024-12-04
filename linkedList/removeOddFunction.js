// Definition of a singly linked list node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Removes all nodes with odd values from the linked list.
 * @param {ListNode} head - The head node of the linked list.
 * @returns {ListNode} - The head node of the modified linked list.
 */
function removeOddValues(head) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while (current.next !== null) {
        if (current.next.value % 2 !== 0) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

// Example Usage
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original Linked List:");
printLinkedList(head);

head = removeOddValues(head);
console.log("Linked List after removing odd values:");
printLinkedList(head);
