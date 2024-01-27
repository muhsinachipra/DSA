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
        let currentNode = this.root;
        for (let i = index; i < str.length; i++) {
            const letter = str[i];
            if (!currentNode.children.has(letter)) {
                const newNode = new TrieNode();
                currentNode.children.set(letter, newNode);
            }
            currentNode = currentNode.children.get(letter);
        }
        currentNode.isEnd = true;
    }

    hasWord(str) {
        let currentNode = this.root;
        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
            if (currentNode.children.has(letter)) {
                currentNode = currentNode.children.get(letter);
            } else {
                return false;
            }
        }
        return currentNode.isEnd
    }

}

const suffixTrie = new SuffixTrie();

suffixTrie.populate("banana");

console.log(suffixTrie.hasWord("ana")); // true
console.log(suffixTrie.hasWord("nana")); // true
console.log(suffixTrie.hasWord("na")); // true
console.log(suffixTrie.hasWord("ban")); // false