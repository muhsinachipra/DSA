function recursionalFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursionalFibonacci(n - 1) + recursionalFibonacci(n - 2)
}

console.log(recursionalFibonacci(6))