function countFrequency(arr) {
    const frequencyTable = {};

    for (const element of arr) {
        if (frequencyTable[element]) {
            frequencyTable[element] += 1;
        } else {
            frequencyTable[element] = 1;
        }
    }

    return frequencyTable;
}

// Example usage:
const numbers = [1, 2, 3, 4, 2, 3, 1, 4, 5, 1, 2, 2];
const frequencyResult = countFrequency(numbers);

console.log("Frequency Table:", frequencyResult);