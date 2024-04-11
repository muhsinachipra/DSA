const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

let count = 0
matrix.forEach(row => {
    row.forEach(element => {
        if (element === 1) count++
    })
});

console.log('Count of 1s is : ', count)