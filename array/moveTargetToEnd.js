function moveTargetToEnd(a, t) {
    let li = a.length-1;
    for (let i = 0; i <= li; i++) {
        while (a[li] === t) {
            li--
        }
        if (a[i] === t) {
            [a[i], a[li]] = [a[li], a[i]];
        }
    }
    return a
}


let arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
let tar = 6
let result = moveTargetToEnd(arr, tar)
console.log(result); // output : [9,  1, 3, 8, 10, 4, 15, 6, 6,  6, 6]