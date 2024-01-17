const selectionSort = arr => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let indexMin = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            let temp = arr[indexMin];
            arr[indexMin] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const arr = [7, 9, 3, 5, 15, 10, 0]; // [0, 3, 5, 7, 9, 10, 15]
selectionSort(arr);
console.log(arr);

// Big-0 = O(n^2)