const Queue = require('../queue/queueOptimised');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left) {
                this.insertNode(root.left, newNode);
            } else {
                root.left = newNode;
            }
        } else {
            if (root.right) {
                this.insertNode(root.right, newNode);
            } else {
                root.right = newNode;
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true;
            } else if (root.value > value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    // DFS ALGORITHMS
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    // BFS ALGORITHM USING ARRAY
    levelOrder2() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    // BFS ALGORITHM USING THE OPTIMISED QUEUE
    levelOrder() {
        const queue = new Queue();
        queue.enqueue(this.root);
        while (!queue.isEmpty()) {
            let curr = queue.dequeue();
            console.log(curr.value);
            if (curr.left) {
                queue.enqueue(curr.left);
            }
            if (curr.right) {
                queue.enqueue(curr.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.right) {
                return root.left;
            } else if (!root.left) {
                return root.right;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    sumOfAllElements(root) {
        if (!root) {
            return 0
        } else {
            let leftSum = this.sumOfAllElements(root.left)
            let rightSum = this.sumOfAllElements(root.right)
            return root.value + leftSum + rightSum
        }
    }

    maxValue(root) {
        if (!root) {
            return Number.NEGATIVE_INFINITY
        } else {
            let leftMax = this.maxValue(root.left)
            let rightMax = this.maxValue(root.right)
            return Math.max(root.value, leftMax, rightMax)
        }
    }

    heightOfTree(root) {
        if (!root) {
            return 0
        } else {
            let leftHeight = this.heightOfTree(root.left)
            let rightHeight = this.heightOfTree(root.right)
            return 1 + Math.max(leftHeight, rightHeight)
        }
    }

    existsInTree(root, value) {
        if (!root) {
            return false;
        } else {
            let inLeft = this.existsInTree(root.left, value);
            let inRight = this.existsInTree(root.right, value);
            return root.value === value || inLeft || inRight;
        }
    }

    reverseTree(root) {
        if (!root) {
            return;
        } else {
            this.reverseTree(root.left);
            this.reverseTree(root.right);
            [root.left, root.right] = [root.right, root.left];
        }
    }

    isValidBST() {
        return this.isValidHelper(this.root, -Infinity, Infinity)
    }

    isValidHelper(root, lower, upper) {
        if (!root) return true
        if ((root.value > lower) && (root.value < upper)) {
            return this.isValidHelper(root.left, lower, root.value) && this.isValidHelper(root.right, root.value, upper)
        } else {
            return false
        }
    }

    findClosestValue(root, target) {
        let closest = root.value;
        let currentNode = root;

        while (currentNode !== null) {
            // Update the closest value if the current node is closer to the target
            if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
                closest = currentNode.value;
            }

            // Move left or right depending on the target value
            if (target < currentNode.value) {
                currentNode = currentNode.left;
            } else if (target > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                break; // Exact match found, exit early
            }
        }

        return closest;
    }

}

const bst = new BinarySearchTree();
console.log('binary search tree empty', bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log('Closest value to 12:', bst.findClosestValue(bst.root, 12));  // Expected output: 10
console.log('Closest value to 6:', bst.findClosestValue(bst.root, 6));   // Expected output: 5


console.log(bst.sumOfAllElements(bst.root))
console.log(bst.maxValue(bst.root))
console.log(bst.heightOfTree(bst.root))
console.log(bst.existsInTree(bst.root, 3))

// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 5))
// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 20))

// bst.postOrder(bst.root)
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

bst.levelOrder()
console.log('----------------------------------------------------------------')

// bst.reverseTree(bst.root)
console.log('after reverseTree')
bst.levelOrder()

// bst.delete(10)
console.log('----------------------------------------------------------------')
console.log(bst.isValidBST())

// bst.levelOrder()