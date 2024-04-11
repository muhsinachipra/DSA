// ==== EXPLANATION ====
// The code prints elements from an array in a specific order.
// The first element of the array indicates how many times the next element should be printed.

// It uses a stack to reverse the array elements: first, it pushes all elements onto the stack.
// Then, it pops each element and prints it a number of times based on the next element in the array.

// So, if the first element of the array is 'n', the next element is printed 'n' times.
// This process repeats for each element in the array.


function printArrayInOrder(arr) {
    const stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        stack.push(arr[i]);
    }

    while (stack.length > 0) {
        const count = stack.pop();
        const element = stack.pop();

        for (let i = 0; i < count; i++) {
            console.log(element);
        }
    }
}

const arr = [3, 'a', 2, 'b', 1, 'c'];
printArrayInOrder(arr);

