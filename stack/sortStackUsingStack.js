function sortStack(stack) {
    const temp = []
    while (stack.length > 0) {
        const current = stack.pop()
        while (temp.length > 0 && temp[temp.length - 1] > current) {
            stack.push(temp.pop())
        }
        temp.push(current)
    }
    while (temp.length > 0) {
        stack.push(temp.pop())
    }
}


// Example usage
const stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack); // Output: [ 98, 92, 34, 31, 23, 3 ] (sorted stack)
