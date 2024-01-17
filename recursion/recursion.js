function recursion(n) {
    if (n <= 1) return;
    recursion(n - 1);
    console.log(n);
    recursion(n - 1);
}

recursion(5)