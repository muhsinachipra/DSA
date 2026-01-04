function countFrequency(array) {
    const freqTable = new Map();

    for (const element of array) {
        if (freqTable.has(element)) {
            freqTable.set(element, freqTable.get(element) + 1);
        } else {
            freqTable.set(element, 1);
        }
    }

    return freqTable;
}

// Example usage:
const numbers = [1, 2, 3, 4, 2, 3, 1, 4, 5, 1, 2, 2];
const frequencyResult = countFrequency(numbers);

console.log("Frequency Table:", frequencyResult);