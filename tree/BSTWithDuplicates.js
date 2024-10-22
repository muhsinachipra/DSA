class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1; // To handle duplicate elements
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }

        if (value === node.value) {
            // Instead of ignoring duplicates, we increment the count
            node.count++;
        } else if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else {
            node.right = this._insert(node.right, value);
        }

        return node;
    }

    // In-order traversal to display the tree elements
    inorderTraversal() {
        const result = [];
        this._inorderTraversal(this.root, result);
        return result;
    }

    _inorderTraversal(node, result) {
        if (node === null) return;
        this._inorderTraversal(node.left, result);
        // Push each element the number of times it appears (count)
        for (let i = 0; i < node.count; i++) {
            result.push(node.value);
        }
        this._inorderTraversal(node.right, result);
    }

    // Method to remove duplicates by setting count to 1 for all nodes
    removeDuplicates() {
        this._removeDuplicates(this.root);
    }

    _removeDuplicates(node) {
        if (node === null) return;

        // Traverse the left and right subtrees first
        this._removeDuplicates(node.left);
        this._removeDuplicates(node.right);

        // If a node has a count greater than 1, reset it to 1
        if (node.count > 1) {
            node.count = 1;
        }
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(10); // Duplicate element
bst.insert(3);
bst.insert(5);  // Duplicate element

console.log("Before removing duplicates:", bst.inorderTraversal());
// Output: [ 3, 5, 5, 10, 10 ]

bst.removeDuplicates();

console.log("After removing duplicates:", bst.inorderTraversal());
// Output: [ 3, 5, 10 ]
