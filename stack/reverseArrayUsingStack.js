function reverseArrayUsingStack(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }

  return arr;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArrayUsingStack(originalArray.slice()); // Make a copy to avoid modifying the original array
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
