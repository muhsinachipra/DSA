function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitWise(1)) // true
console.log(isPowerOfTwoBitWise(2)) // true
console.log(isPowerOfTwoBitWise(5)) // false

// Big-0 = o(1)