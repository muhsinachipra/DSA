class SuffixTrie {
    // Existing code here...

    printWordsWithPrefix(prefix) {
        let currentNode = this.root;

        // Traverse to the node corresponding to the prefix
        for (let i = 0; i < prefix.length; i++) {
            if (currentNode.children.has(prefix[i])) {
                currentNode = currentNode.children.get(prefix[i]);
            } else {
                // If prefix not found, return an empty array
                return [];
            }
        }

        // Call helper function to print words recursively
        this.printWordsWithPrefixHelper(prefix, currentNode);
    }

    printWordsWithPrefixHelper(prefix, node) {
        // Base case: If the current node is the end of a word, print the prefix + suffix
        if (node.isEnd) {
            console.log(prefix);
        }

        // Recursively print words for each child node
        for (let [char, childNode] of node.children) {
            this.printWordsWithPrefixHelper(prefix + char, childNode);
        }
    }
}

// Example usage:
const suffixTrie = new SuffixTrie();
suffixTrie.populate("banana");
suffixTrie.populate("apple");
suffixTrie.populate("app");
suffixTrie.populate("application");

console.log('Words starting with "app":');
suffixTrie.printWordsWithPrefix("app");




class Node {
    constructor(letter = '') {
        this.children = new Map();
        this.value = letter;
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let currNode = this.root;
        word = word.split("");
        for (let i = 0; i < word.length; i++) {
            if (!currNode.children.has(word[i])) {
                currNode.children.set(word[i], new Node(word[i]));
            }
            currNode = currNode.children.get(word[i]);
        }
        currNode.isEnd = true;
    }

    hasWord(word) {
        let currNode = this.root;
        for (const letter of word) {
            if (!currNode.children.has(letter)) {
                return false;
            }
            currNode = currNode.children.get(letter);
        } 
        return currNode.isEnd;
    }

    commonPrefix() {
        let currNode = this.root;
        let prefix = "";
        while (currNode.children.size === 1 && !currNode.isEnd) {
            const [key, value] = currNode.children.entries().next().value;
            prefix = prefix.concat(key)
            currNode = value;
        }
        if (currNode.isEnd) {
            prefix = prefix.concat(currNode.value);
        }
        console.log("Common prefix : ", prefix);
    }

    getWordsWithPrefix(prefix) {
        let currNode = this.root;

        for (const letter of prefix) {
            if (!currNode.children.has(letter)) {
                console.log('No words with the given prefix');
                return;
            }
            currNode = currNode.children.get(letter);
        }
        let res = this.collectWords(currNode, prefix, []);
        return res;
    }

    collectWords(node, prefix, words) {
        if (node.isEnd) {
            words.push(prefix);
        }

        for (const [key, child] of node.children.entries()) {
            this.collectWords(child, prefix + node.value, words);
        }

        return words;
    }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
console.log(`Trie contains the app: ${trie.hasWord("app")}`);
trie.commonPrefix();
console.log(trie.getWordsWithPrefix("app"));
