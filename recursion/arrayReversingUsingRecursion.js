function recursiveArrRev(arr, left, right) {
    if (left >= right) {
        return arr;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left = left + 1
    right = right - 1
    return recursiveArrRev(arr, left, right)
}

function arrRev(arr) {
    let left = 0
    let right = arr.length - 1
    return recursiveArrRev(arr, left, right)
}

let arr = [6, 7, 8, 9, 10];
console.log(arrRev(arr));  // [10,9,8,7,6]

// --------------------------------------------------------------  //

function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    } else {
        const [first, ...rest] = arr;
        return [...reverseArray(rest), first];
    }
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
