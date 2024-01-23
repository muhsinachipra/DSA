// Node class for linked list
class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  // HashTable class
  class HashTable {
    constructor(size = 11) {
      this.size = size;
      this.table = new Array(size);
    }
  
    // Hash function to get index
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i)) % this.size;
      }
      return hash;
    }
  
    // Insert key-value pair into the hash table
    insert(key, value) {
      const index = this.hash(key);
      const newNode = new Node(key, value);
  
      if (!this.table[index]) {
        this.table[index] = newNode;
      } else {
        let current = this.table[index];
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Get value associated with a key
    get(key) {
      const index = this.hash(key);
      let current = this.table[index];
  
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
  
      return undefined; // Key not found
    }
  
    // Remove key-value pair from the hash table
    remove(key) {
      const index = this.hash(key);
      let current = this.table[index];
      let prev = null;
  
      while (current) {
        if (current.key === key) {
          if (prev) {
            prev.next = current.next;
          } else {
            this.table[index] = current.next;
          }
          return true; // Key found and removed
        }
        prev = current;
        current = current.next;
      }
  
      return false; // Key not found
    }
  }
  
  // Example usage:
  const myHashTable = new HashTable();
  
  myHashTable.insert("name", "John");
  myHashTable.insert("age", 25);
  myHashTable.insert("city", "New York");
  
  console.log(myHashTable.get("name")); // Output: John
  console.log(myHashTable.get("age"));  // Output: 25
  
  myHashTable.remove("age");
  console.log(myHashTable.get("age"));  // Output: undefined (key not found after removal)
  