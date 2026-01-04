function sortStack(stack) {
    const temp = []
    while (stack.length > 0) {
        const current = stack.pop()
        while (temp.length && temp.at(- 1) > current) {
            stack.push(temp.pop())
        }
        temp.push(current)
    }
    while (temp.length) {
        stack.push(temp.pop())
    }
}


// Example usage
const stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack); // Output: [ 98, 92, 34, 31, 23, 3 ] (sorted stack)
