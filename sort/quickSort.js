function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]

// Worst case - 0 (n^2)
// Avg case - 0(nlogn)