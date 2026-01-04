function bubbleSort(arr) {
    let swapped
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]

// Big-O = O(n^2)T
// Big-O = O(1)S