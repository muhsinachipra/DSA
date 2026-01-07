function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = res * i;
    }
    return res;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
// Big-0 = 0 (n)
