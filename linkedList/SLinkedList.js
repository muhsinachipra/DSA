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
            let cur = this.head
            for (let i = 0; i < index; i++) {
                prev = cur
                cur = cur.next
            }
            let reversePrev = null
            let reverseCur = cur
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

}

const list = new LinkedList()

list.insert(10, 0)
list.insert(20, 1)
list.insert(30, 2)
list.insert(40, 3)
list.print()

// list.reverse()
list.reverseFromIndex(2)
list.print()