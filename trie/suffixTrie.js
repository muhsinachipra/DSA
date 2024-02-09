class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode();
    }

    populate(str) {
        for (let i = 0; i < str.length; i++) {
            this.insertSuffixStartingAt(i, str);
        }
    }

    insertSuffixStartingAt(index, str) {
        let currentNode = this.root
        for (let i = index; i < str.length; i++) {
            if (!currentNode.children.has(str[i])) {
                currentNode.children.set(str[i], new TrieNode())
            }
            currentNode = currentNode.children.get(str[i]);
        }
        currentNode.isEnd = true;
    }

    hasWord(str) {
        let currentNode = this.root;
        for (let i = 0; i < str.length; i++) {
            if (currentNode.children.has(str[i])) {
                currentNode = currentNode.children.get(str[i]);
            } else {
                return false;
            }
        }
        return currentNode.isEnd
    }

    countWordsWithPrefix(prefix) {
        let currentNode = this.root
        for (let i = 0; i < prefix.length; i++) {
            if (currentNode.children.has(prefix[i])) {
                currentNode = currentNode.children.get(prefix[i])
            } else {
                return 0
            }
        }
        return this.countWord(currentNode)
    }

    countWord(node) {
        if (!node) return 0
        let count = node.isEnd ? 1 : 0;
        for (let child of node.children.values()) {
            count += this.countWord(child)
        }
        return count
    }

    removeWord(str) {
        if (!this.hasWord(str)) return
        this.removeHelper(this.root, str, 0)
    }

    removeHelper(node, str, index) {
        if (index === str.length) {
            node.isEnd = false
            return
        }

        let char = str[index]
        let childNode = node.children.get(char)

        if (!childNode) return
        this.removeHelper(childNode, str, index + 1)

        if (childNode.children.size === 0 && !childNode.isEnd) {
            node.children.delete(char)
        }
    }
}

const suffixTrie = new SuffixTrie();

suffixTrie.populate("banana");

console.log(suffixTrie.hasWord("ana")); // true
console.log(suffixTrie.hasWord("nana")); // true
console.log(suffixTrie.hasWord("na")); // true
console.log(suffixTrie.hasWord("ban")); // false
console.log('-------------------------------------------------------------------------------')
suffixTrie.populate("apple");
suffixTrie.populate("app");
suffixTrie.populate("application");

console.log(suffixTrie.hasWord("apple")); // Output: true
suffixTrie.removeWord("apple");
console.log(suffixTrie.hasWord("apple")); // Output: false
console.log('-------------------------------------------------------------------------------')

suffixTrie.populate("apple");
suffixTrie.populate("app");
suffixTrie.populate("application");

console.log(suffixTrie.countWordsWithPrefix("app")); // Output: 3 (apple, app, application)
console.log(suffixTrie.countWordsWithPrefix("ban")); // Output: 1 (banana)
console.log(suffixTrie.countWordsWithPrefix("car")); // Output: 0 (no words with prefix banana)