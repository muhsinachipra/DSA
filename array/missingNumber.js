const array = [1, 2, 3, 4, 5, 7];
function findMissingNumber(arr) {
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            num++;
        } else {
            return num;
        }
    }
}

console.log("Missing Number is : ", findMissingNumber(array));
