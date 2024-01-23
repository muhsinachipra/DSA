function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [3, 2, 5, 1, 9]
console.log(quickSort(arr))


enqueue(value){
    const node = new Node(value);
    if ()
    this.tail.next = node;
    this.tail = node
    this.size++;
}

dequeue(){
    if (this.isEmpty()) {
        return null
    }
    deleted = this.head.value
    this.head = this.head.next
    return deleted
}