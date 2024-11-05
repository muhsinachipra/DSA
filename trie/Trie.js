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

    hasPrefix(prefix) {
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
        let node = this.root;
        let path = [this.root]

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

    getWordsWithPrefix(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return []
            }
            node = node.children.get(char)
        }

        const words = [];
        this._dfs(node, prefix, words)
        return words
    }

    _dfs(node, prefix, words) {
        if (node.isEndOfWord) {
            words.push(prefix)
        }

        for (const [char, child] of node.children) {
            this._dfs(child, prefix + char, words)
        }
    }

    countWordsWithPrefix(prefix) {
        let node = this.root
        for (const char of prefix) {
            if (node.children.has(char)) {
                node = node.children.get(char)
            } else {
                return 0
            }
        }
        return this._countWord(node)
    }

    _countWord(node) {
        if (!node) return 0
        let count = node.isEndOfWord ? 1 : 0;
        for (let child of node.children.values()) {
            count += this._countWord(child)
        }
        return count
    }

    findCommonPrefix() {
        let commonPrefix = '';
        let node = this.root;

        while (node.children.size === 1 && !node.isEndOfWord) {
            const char = node.children.keys().next().value;
            commonPrefix += char;
            node = node.children.get(char);
        }
        return commonPrefix;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("appetizer");
trie.insert("application");
console.log("Common Prefix:", trie.findCommonPrefix()); // Output: Common Prefix: app

trie.insert("banana");
trie.insert("bat");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.hasPrefix("app")); // true
trie.insert("app");
console.log(trie.search("app"));     // true
console.log("Total words:", trie.countWords());

// User starts typing "app"
const prefix = "app";
const suggestions = trie.getWordsWithPrefix(prefix);

console.log("Autocomplete suggestions for", prefix, ":", suggestions);
// Output: Autocomplete suggestions for app : [ 'apple', 'appetizer', 'application' ]

console.log(trie.countWordsWithPrefix("app")); // Output: 4 (apple, appetizer, app, application)


