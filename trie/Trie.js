class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
        this.wordCount = 0;
    }

    insert(word) {
        let node = this.root
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)
        }
        if (!node.isEndOfWord) {
            node.isEndOfWord = true;
            this.wordCount++;
        }
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)
        }
        return node.isEndOfWord
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)
        }
        return true;
    }

    delete(word) {
        if (!this.search(word)) return false;
        node = this.root;
        path = [this.root]

        for (const char of word) {
            path.push(node)
            node = node.children.get(char)
        }

        node.isEndOfWord = false;
        this.wordCount--;

        for (let i = path.length - 1; i >= 0; i--) {
            const current = path[i];
            const char = word[i - 1];
            if (current.children.get(char).children.size === 0) {
                current.children.delete(char);
            } else {
                break;
            }
        }
        return true;
    }

    countWords() {
        return this.wordCount
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app"));     // true
console.log("Total words:", trie.countWords());