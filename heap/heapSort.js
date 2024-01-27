function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, n, i)
    }

    for (let i = n - 1; i >= 0; i--) {
        swap(arr, i, 0)
        heapifyDown(arr, i, 0)
    }
}

function heapifyDown(arr, heapSize, currentIdx) {
    let leftIdx = (2 * currentIdx) + 1
    let rightIdx = (2 * currentIdx) + 2
    let largeIdx = currentIdx
    if (leftIdx < heapSize && arr[leftIdx] > arr[largeIdx]) {
        largeIdx = leftIdx
    }

    if (rightIdx < heapSize && arr[rightIdx] > arr[largeIdx]) {
        largeIdx = rightIdx
    }

    if (largeIdx !== currentIdx) {
        swap(arr, largeIdx, currentIdx)
        heapifyDown(arr, heapSize, largeIdx)
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const array = [50, 40, 60, 30, 20, 55, 75];
console.log("Array Before:", array);
heapSort(array)
console.log("Array After:", array)