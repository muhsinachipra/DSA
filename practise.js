class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    wordsWithPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return []; // No words with the given prefix
            }
            node = node.children[char];
        }

        return this._collectWords(node, prefix);
    }

    _collectWords(node, prefix, words = []) {
        if (node.isEndOfWord) {
            words.push(prefix);
        }

        for (let char in node.children) {
            this._collectWords(node.children[char], prefix + char, words);
        }

        return words;
    }
}

// Example usage:
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("orange");

let prefix = "app";
let wordsStartingWithPrefix = trie.wordsWithPrefix(prefix);
console.log(`Words starting with prefix '${prefix}':`, wordsStartingWithPrefix);




class Node {
    constructor(letter) {
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
        console.log("Common prefix : ",prefix)
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
            this.collectWords(child, prefix + key, words);
        }

        return words;
    }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
console.log(Trie contains the app : ${trie.hasWord("app")});
trie.commonPrefix();
console.log(trie.getWordsWithPrefix("app"));




class Trie {
    // Constructor and other methods are assumed to be defined here...

    getWordsWithCommonPrefix(prefix) {
        let node = this.root;
        // Traverse to the node representing the end of the prefix
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return []; // Prefix not found
            }
            node = node.children.get(char);
        }

        const words = [];
        // Perform DFS to find all words with the common prefix
        this.dfs(node, prefix, words);
        return words;
    }

    dfs(node, prefix, words) {
        // If the current node represents the end of a word, add it to the list
        if (node.isEndOfWord) {
            words.push(prefix);
        }

        // Recursively explore children nodes
        for (const [char, child] of node.children) {
            this.dfs(child, prefix + char, words);
        }
    }
}
