function recursiveSumOfArray(arr) {
    if (arr.length === 0) {
        return 0; // base case: empty array has sum 0
    }
    return arr[0] + recursiveSumOfArray(arr.slice(1));
}