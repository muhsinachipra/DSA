// counting occurrences of the substring 'aa' within a given string, but with a specific condition: 
// the 'aa' should not be immediately preceded or followed by another 'a'.

const str = 'abdcrjkaabazkaaabsaa'

const countDouble = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i + 1] === 'a' && str[i + 2] !== 'a' && str[i - 1] !== 'a') {
            count++
        }
    }
    return count
}

console.log(countDouble(str))