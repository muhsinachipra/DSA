// The `fib` function computes the xth Fibonacci number efficiently using memoization.
// If x is 0 or 1, it returns x because F(0) = 0 and F(1) = 1.
// For x > 1, it recursively calculates F(x) by adding F(x-1) and F(x-2),
// storing intermediate results in the 'memo' object to prevent redundant calculations.

function fib(x, memo = {}) {
    if (x in memo) return memo[x]

    if (x < 2) return x

    memo[x] = fib(x - 1, memo) + fib(x - 2, memo)
    return memo[x]
}


console.log(fib(7))