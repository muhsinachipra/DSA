class Node {
    constructor(key, value) {
        this.value = value
        this.key = key
        this.next = null
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (const char of key) {
            total += char.charCodeAt(0)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(value)
        const newNode = new Node(key, value)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = newNode
        } else {
            let current = this.table[index]
            while (current) {
                if (current.key === key) {
                    current.value = value
                }
                current = current.next
            }
            current.next = newNode
        }
    }

    get(key) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}