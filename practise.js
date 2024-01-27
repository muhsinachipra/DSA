function heapSort(arr) {
    let n = arr.length;
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, n, i);
    }

    // Extract elements from the heap
    for (let i = n - 1; i >= 0; i--) {
        swap(arr, i, 0);
        heapifyDown(arr, i, 0);
    }
}

function heapifyDown(arr, heapSize, currentIdx) {
    let largest = currentIdx;
    let leftIdx = 2 * currentIdx + 1;
    let rightIdx = 2 * currentIdx + 2;

    if (leftIdx < heapSize && arr[leftIdx] > arr[largest]) {
        largest = leftIdx;
    }

    if (rightIdx < heapSize && arr[rightIdx] > arr[largest]) {
        largest = rightIdx;
    }

    if (largest !== currentIdx) {
        swap(arr, currentIdx, largest);
        heapifyDown(arr, heapSize, largest); // Recursively heapify the affected subtree
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const array = [50, 40, 60, 30, 20, 55, 75];
console.log("array before:", array);
heapSort(array);
console.log("array after:", array);





//------------------------------------------------------------------------------------------------






class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class TrieTree {
    constructor() {
        this.root = new TrieNode();
    }

    trie(str) {
        this.populateSuffixTrie(str);
    }

    populateSuffixTrie(str) {
        for (let i = 0; i < str.length; i++) {
            this.insertSubStringStartingAt(i, str)
        }
    }

    insertSubStringStartingAt(index, str) {
        let trieNode = this.root;
        for (let i = index; i < str.length; i++) {
            const letter = str.charAt(i);
            if (!trieNode.children.has(letter)) {
                const newNode = new TrieNode();
                trieNode.children.set(letter, newNode);
            }
            trieNode = trieNode.children.get(letter);
        }
        trieNode.isEnd = true;
    }

    hasWord(str) {
        let trieNode = this.root;
        for (let i = 0; i < str.length; i++) {
            let letter = str.charAt(i);
            if (!trieNode.children.has(letter)) {
                return false;
            }
            trieNode = trieNode.children.get(letter)
        }
        return trieNode.isEnd;
    }


    traversal(node = this.root, currentString = '', prefix = '', result = []) {
        if (node.isEnd && currentString.includes(prefix)) {
            result.push(currentString);
        }

        for (let [letter, child] of node.children) {
            this.traversal(child, currentString + letter, prefix, result)
        }

        return result;
    }


}

const trieSting = new TrieTree();
trieSting.trie("Hello");
trieSting.trie("eat");
trieSting.trie("elephent");
console.log("String is present in Trie DS :", trieSting.hasWord('eat'))
// console.log(trieSting.traversal())
// const string = trieSting.traversal(trieSting.root,"","el",[]);
// console.log(string)




// --------------------------------------------------------------------------------------------------------------





class TrieNode {
    constructor() {
        this.children = new Map(); // Map to store child nodes
        this.isEnd = false; // Flag to mark end of a word
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }

    // Populate the trie with all suffixes of the given string
    populate(str) {
        for (let i = 0; i < str.length; i++) {
            this.insertSuffixStartingAt(i, str);
        }
    }

    // Insert a suffix of the string starting from the given index
    insertSuffixStartingAt(index, str) {
        let currentNode = this.root;
        for (let i = index; i < str.length; i++) {
            const letter = str[i];
            if (!currentNode.children.has(letter)) {
                // Create a new node if the letter doesn't exist
                const newNode = new TrieNode();
                currentNode.children.set(letter, newNode);
            }
            // Move to the child node
            currentNode = currentNode.children.get(letter);
        }
        // Mark the end of the word
        currentNode.isEnd = true;
    }

    // Check if a word exists in the trie
    hasWord(str) {
        let currentNode = this.root;
        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
            if (!currentNode.children.has(letter)) {
                return false; // Word not found
            }
            // Move to the child node
            currentNode = currentNode.children.get(letter);
        }
        return currentNode.isEnd; // Return true if the word ends at this node
    }

    // Traverse the trie and collect words with a specific prefix
    traverse(node = this.root, currentString = '', prefix = '', result = []) {
        if (node.isEnd && currentString.startsWith(prefix)) {
            result.push(currentString); // Collect words with the prefix
        }

        // Recursively traverse the child nodes
        for (const [letter, child] of node.children) {
            this.traverse(child, currentString + letter, prefix, result);
        }

        return result;
    }
}

// Example usage:
const trie = new SuffixTrie();
trie.populate("Hello");
trie.populate("eat");
trie.populate("elephant");

console.log("String 'eat' is present in the Trie DS:", trie.hasWord('eat'));
// const wordsWithPrefix = trie.traverse(trie.root, "", "el", []);
// console.log(wordsWithPrefix);
