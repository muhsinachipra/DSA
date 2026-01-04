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
        console.log("Common prefix : ", prefix)
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
console.log(`Trie contains the app : ${trie.hasWord("app")}`);
trie.commonPrefix();
console.log(trie.getWordsWithPrefix("app"));