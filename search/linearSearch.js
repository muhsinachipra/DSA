function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) if (array[i] === target) return i
    return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1

// Big-0 = 0(n)