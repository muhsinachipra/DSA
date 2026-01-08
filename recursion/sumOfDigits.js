// Write a recursive function to find the sum of digits of a positive integer n
// Eg: 53421
// sum = 15

function sumOfDigits(num) {
    if (num === 0) {
        return 0;
    }
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(53421));
