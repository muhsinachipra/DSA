function compressString(str) {
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result;
}

// Testing the examples
console.log(compressString("aaabbccccc")); // Output: "a3b2c5"
console.log(compressString("hhhhiinnnl")); // Output: "h4i2n3l1"
