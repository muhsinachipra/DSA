function recursiveSumOfArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return recursiveSumOfArray([arr[0] + arr[1], ...arr.slice(2)]);
}


function recursiveSumOfArray(arr) {
    if (!arr.length) {
        return 0;
    }
    return arr[0] + recursiveSumOfArray(arr.slice(1));
}


let arr = [1, 2, 3, 4, 5, 6];
console.log(recursiveSumOfArray(arr))