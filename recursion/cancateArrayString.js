function concatenateArrayString(arr, arr2) {
    if (!arr2.length) return arr;
    return [...arr, ...concatenateArrayString(arr2.slice(0, 1), arr2.slice(1))];
}

let arr = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
console.log(concatenateArrayString(arr, arr2)); // ['a', 'b', 'c', 'd', 'e', 'f']